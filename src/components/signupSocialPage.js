import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Input from './register/input';
import Navigation from './register/navigation';
import {addSocialLink, removeSocialLink} from '../action/register';
import {changeStep} from '../action/registerNavigation';
import {KEYBOARD_MAP} from '../constant';

class SignupSocialPage extends React.Component {
  pageIndex = 3;

  state = {
    inputValue: ''
  };

  static propTypes = {
    socialLinks: PropTypes.array.isRequired,
    changeStep: PropTypes.func.isRequired,
    addSocialLink: PropTypes.func.isRequired,
    removeSocialLink: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  handleChangeInput = (value) => {
    this.setState({
      inputValue: value
    });
  };

  handleClickAddBtn = (ev) => {
    ev.preventDefault();

    this.props.addSocialLink(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  handleKeyDownInput = (ev) => {
    if (KEYBOARD_MAP[ev.keyCode] === 'ENTER') {
      this.handleClickAddBtn(ev);
    }
  };

  render() {
    const {socialLinks} = this.props;
    //@TODO: validation 함수 필요
    return (
      <div className="front__register">
        <div className="front__register__navigation">
          <Navigation />
        </div>
        <div className="front__register__input">
          {/* @TODO: domain */}
          <Input
            type="text"
            value={this.state.inputValue}
            onChange={(ev) => this.handleChangeInput(ev.target.value)}
            onKeyDown={this.handleKeyDownInput}
            fontSize="70px"
            placeholder="link here"
          />
          <a className="social__add__button" href="#" onClick={this.handleClickAddBtn}>
            add
          </a>
        </div>
        <div className="register__social__link__list">
          {socialLinks.map((link) => (
            <div key={link} className="register__social__link__item">
              <p>{link}</p>
            </div>
          ))}
        </div>
        <div className="front__register__next">
          <Link to="/signup/more" className="front__register__next__title">
            done
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {socialLinks} = state.register;

  return {
    socialLinks
  };
};

const mapDispatchToProps = {
  locationPush,
  addSocialLink,
  removeSocialLink,
  changeStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupSocialPage);
