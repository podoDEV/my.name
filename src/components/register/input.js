import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    validator: PropTypes.func,
    fontSize: PropTypes.string,
    placeholder: PropTypes.string
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
    const {type, value, fontSize = 'inherits', placeholder} = this.props;
    const {isValid, errorMessage} = this.state;
    const fontSizeWithoutPX = Number.parseInt(fontSize);
    const dotSize = fontSizeWithoutPX / 3;

    // console.log((placeholder.length + 1) * (Number.parseInt(fontSize) / 2) > Number.parseInt(fontSize) / 3);
    // @TODO: fontSize에 따라 minWidth를 조정해줘야함
    return (
      <div className={cls('forms__input__container')}>
        <div className={cls('forms__input__area')}>
          <input
            type={type}
            value={value}
            onChange={this.onChangeHandler}
            style={{
              fontSize,
              width: (value.length + 1) * (fontSizeWithoutPX / 2 + 3),
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
              borderRadius: dotSize
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
