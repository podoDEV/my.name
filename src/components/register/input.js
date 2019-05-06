import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    c: PropTypes.func,
    validator: PropTypes.func,
    fontSize: PropTypes.string,
    placeholder: PropTypes.string,
    withKorean: PropTypes.bool
  };

  state = {
    isValid: false,
    errorMessage: ''
  };

  isValidInput = (value) => {
    const {isValid, errorMessage} = this.props.validator(value);

    this.setState({
      isValid,
      errorMessage
    });
  };

  onChangeHandler = (ev) => {
    const {onChange, validator} = this.props;

    onChange(ev);
    if (validator) {
      this.isValidInput(ev.target.value);
    }
  };

  render() {
    const {type, value, fontSize = 'inherits', placeholder, withKorean = false} = this.props;
    const {isValid, errorMessage} = this.state;
    const fontSizeWithoutPX = Number.parseInt(fontSize);
    const dotSize = fontSizeWithoutPX > 100 ? 50 : fontSizeWithoutPX / 3;
    const width =
      (value.length + 1) * (fontSizeWithoutPX / 2) + fontSizeWithoutPX * (withKorean ? 1.3 : 1);

    return (
      <div className={cls('forms__input__container')}>
        <div className={cls('forms__input__area')}>
          <input
            type={type}
            value={value}
            onChange={this.onChangeHandler}
            onKeyDown={this.props.onKeyDown}
            style={{
              fontSize,
              width: this.props.value ? width : '100%',
              minWidth: (placeholder.length + 1) * (fontSizeWithoutPX / 2)
            }}
            placeholder={placeholder}
            autoComplete="new-password"
            className={cls(
              {'forms__input__border--invalid': !isValid},
              {'forms__input__border--valid': isValid}
            )}
          />
          <span
            className={cls(
              {'forms__input__dot--invalid': !isValid},
              {'forms__input__dot--valid': isValid}
            )}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize,
              marginLeft: dotSize
            }}
          />
        </div>
        {errorMessage && value.length > 0 && (
          <div className="forms__input__message">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
}
