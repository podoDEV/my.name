import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {push as locationPush} from 'react-router-redux';

import Input from './register/input';
import Navigation from './register/navigation';
import {changeEmail, changePassword} from '../action/register';
import {changeStep} from '../action/registerNavigation';
import {emailRegister} from '../validation';

class SignupEmailPage extends React.Component {
  pageIndex = 0;

  static propTypes = {
    email: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changeStep: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  render() {
    const {email, changeEmail, password, changePassword} = this.props;

    return (
      <div className="front__register">
        <div className="front__register__navigation">
          <Navigation />
        </div>
        <div className="front__register__input">
          <Input
            type="text"
            value={email}
            onChange={(ev) => changeEmail(ev.target.value)}
            fontSize="70px"
            placeholder="email"
            validator={emailRegister}
          />
        </div>
        <div className="front__register__input">
          <Input
            type="password"
            value={password}
            onChange={(ev) => changePassword(ev.target.value)}
            fontSize="70px"
            placeholder="password"
          />
        </div>
        <div className="front__register__next">
          <Link 
            to="/signup/name"
            className="front__register__next__title"
          >
            done
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {email, password} = state.register;

  return {
    email,
    password
  };
};

const mapDispatchToProps = {
  locationPush,
  changeEmail,
  changePassword,
  changeStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupEmailPage);
