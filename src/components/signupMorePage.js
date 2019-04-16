import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Input from './register/input';
import Navigation from './register/navigation';
import {changeJob, changeCompany, changeGender, changeLocation, changePhilosophy, changeContact} from '../action/register';
import {changeStep} from '../action/registerNavigation';
import {nameRegister} from '../validation';

class SignupMorePage extends React.Component {
  pageIndex = 4;

  static propTypes = {
    job: PropTypes.string.isRequired,
    changeStep: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.locationPush('/');
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  render() {
    const {job, company, gender, location, philosophy, contact, changeJob, changeCompany, changeGender, changeLocation, changePhilosophy, changeContact} = this.props;

    return (
      <div className="front__register">
        <div className="front__register__navigation">
          <Navigation />
        </div>
        <div className="front__register__input">
          <Input
            type="text"
            value={job}
            onChange={(ev) => changeJob(ev.target.value)}
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
  const {job} = state.register;

  return {
    job
  };
};

const mapDispatchToProps = {
  locationPush,
  changeJob,
  changeStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupMorePage);
