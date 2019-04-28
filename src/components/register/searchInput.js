import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import {KEYBOARD_MAP} from '../../constant';

const searchResultList = ['A', 'B', '김자영', '검색결과입니다...................'];

export default class SearchInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.any.isRequired,
    changerValue: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    clickResult: PropTypes.func.isRequired,
    validator: PropTypes.func,
    fontSize: PropTypes.string,
    placeholder: PropTypes.string
  };

  state = {
    focusIndex: -1
  };

  onChangeHandler = (ev) => {
    const {onChange} = this.props;
    onChange(ev);
  };

  clickResultListItem = (value) => {
    this.props.clickResult(value);
    this.props.changerValue('');
  };

  changeFocusIndex = (index) => {
    this.setState({
      focusIndex: index
    });
  };

  calculateResultIndex = (newIndex) => {
    // @TODO: search query result
    const searchResultTotalLen = searchResultList.length + 1;

    return (newIndex + searchResultTotalLen) % searchResultTotalLen;
  };

  handleKeyDownInput = (ev) => {
    const keyType = KEYBOARD_MAP[ev.keyCode];
    const {focusIndex} = this.state;
    const searchResultTotalLen = searchResultList.length + 1;

    if (keyType === 'ENTER') {
      if (focusIndex !== -1 && focusIndex !== 0) {
        this.clickResultListItem(searchResultList[focusIndex - 1]);
      } else {
        this.clickResultListItem(this.props.value);
      }

      this.changeFocusIndex(-1);
    } else if (keyType === 'DOWN') {
      ev.preventDefault();

      const newIndex = this.calculateResultIndex(focusIndex + 1);

      this.changeFocusIndex(newIndex);
    } else if (keyType === 'UP') {
      ev.preventDefault();
      let newIndex;

      if (focusIndex === -1) {
        newIndex = searchResultTotalLen - 1;
        this.changeFocusIndex(newIndex);
      } else {
        newIndex = this.calculateResultIndex(focusIndex - 1);
        this.changeFocusIndex(newIndex);
      }
    }
  };

  render() {
    const {type, value, fontSize = 'inherits', placeholder} = this.props;
    const {focusIndex} = this.state;
    const fontSizeWithoutPX = Number.parseInt(fontSize);
    const dotSize = fontSizeWithoutPX > 100 ? 50 : fontSizeWithoutPX / 3;

    return (
      <div className={cls('forms__input__container')}>
        <div className={cls('forms__input__area')}>
          <input
            type={type}
            value={value}
            onChange={this.onChangeHandler}
            style={{
              fontSize,
              width: '100%',
              minWidth: (placeholder.length + 1) * (fontSizeWithoutPX / 2)
            }}
            placeholder={placeholder}
            autoComplete="new-password"
            className={cls('forms__input__border--invalid')}
            onKeyDown={this.handleKeyDownInput}
          />
          <span
            className={cls('forms__input__dot--invalid')}
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize,
              marginLeft: dotSize
            }}
          />
        </div>
        {value && (
          <div className="search__result__area">
            <ul className="search__result__list" onMouseLeave={() => this.changeFocusIndex(-1)}>
              <li
                className={cls('search__result', {focus: focusIndex === 0})}
                onMouseEnter={() => this.changeFocusIndex(0)}
                onClick={() => this.clickResultListItem(value)}
              >
                {value}
              </li>
              {searchResultList.map((searchResult, idx) => (
                <li
                  className={cls('search__result', {focus: focusIndex === idx + 1})}
                  onMouseEnter={() => this.changeFocusIndex(idx + 1)}
                  onClick={() => this.clickResultListItem(searchResult)}
                  key={searchResult}
                >
                  {searchResult}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
