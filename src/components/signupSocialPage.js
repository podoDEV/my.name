import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Input from './register/input';
import Navigation from './register/navigation';
import {changeSocial} from '../action/register';
import {changeStep} from '../action/registerNavigation';
import {nameRegister} from '../validation';

class SignupSocialPage extends React.Component {
  pageIndex = 3;

  static propTypes = {
    social: PropTypes.string.isRequired,
    changeStep: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.locationPush('/');
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  render() {
    const {name, changeName} = this.props;

    return (
      <div className="front__register">
        <div className="front__register__navigation">
          <Navigation />
        </div>
        <div className="front__register__input">
          <Input
            type="text"
            value={name}
            onChange={(ev) => changeSocial(ev.target.value)}
            fontSize="70px"
            placeholder="name"
            validator={nameRegister}
          />
        </div>
        <div className="front__register__next">
          <Link
            to="/signup/more"
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
  const {social} = state.register;

  return {
    social
  };
};

const mapDispatchToProps = {
  locationPush,
  changeSocial,
  changeStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupSocialPage);
