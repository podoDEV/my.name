import React, {Component} from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NavigationStep from './navigationStep';

const stepNames = ['Account?', 'Name?', 'Identification?', 'Interest?', 'Social'];
const links = [
  '/signup/email',
  '/signup/name',
  '/signup/identification',
  '/signup/interest',
  '/signup/social'
];

class RegisterNavigation extends Component {
  static propTypes = {
    prevStep: PropTypes.number.isRequired,
    currentStep: PropTypes.number.isRequired
  };

  render() {
    const {prevStep, currentStep} = this.props;

    return (
      <div className={cls('register__navigation')}>
        <div className={cls('navigation__current__area')}>
          <p className={cls('navigation__current__name')}>{stepNames[currentStep]}</p>
        </div>
        <div className={cls('navigation__step__area')}>
          {stepNames.map((name, idx) => {
            const isCurrent = idx === currentStep;

            return (
              <NavigationStep
                step={idx}
                link={isCurrent ? null : links[idx]}
                currentStep={currentStep}
                prevStep={prevStep}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {prevStep, currentStep} = state.registerNavigation;

  return {
    prevStep,
    currentStep
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterNavigation);
