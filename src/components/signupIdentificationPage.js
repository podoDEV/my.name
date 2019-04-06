import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Input from './register/input';
import Navigation from './register/navigation';
import {changeIdentification} from '../action/register';
import {changeStep} from '../action/registerNavigation';
import {nameRegister} from '../validation';

class SignupIdentificationPage extends React.Component {
  pageIndex = 2;

  static propTypes = {
    identification: PropTypes.string.isRequired,
    changeStep: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.locationPush('/');
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  render() {
    const {identification, changeIdentification} = this.props;

    return (
      <div className="front__register">
        <div className="front__register__navigation">
          <Navigation />
        </div>
        <div className="front__register__input">
          <Input
            type="text"
            value={identification}
            onChange={(ev) => changeIdentification(ev.target.value)}
            fontSize="70px"
            placeholder="search"
            validator={nameRegister}
          />
        </div>
        <div className="front__register__next">
          <Link 
            to="/signup/interest"
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
  const {identification} = state.register;

  return {
    identification
  };
};

const mapDispatchToProps = {
  locationPush,
  changeIdentification,
  changeStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupIdentificationPage);
