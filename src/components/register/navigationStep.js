import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import {Link} from 'react-router-dom';

class NavigationStep extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    prevStep: PropTypes.number.isRequired,
    currentStep: PropTypes.number.isRequired
  };

  timeoutId = null;

  state = {
    moveToOriginalPlace: false
  };

  componentWillReceiveProps(nextProps) {
    const {currentStep, step} = nextProps;

    if (currentStep === step) {
      this.timeoutId = setTimeout(
        function() {
          this.setState({moveToOriginalPlace: true});
        }.bind(this),
        100
      );
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const {prevStep, currentStep} = this.props;
    const X = `${(prevStep - currentStep) * 52.5}`;

    return (
      <div className={cls('navigation__step__container')}>
        {this.props.link ? (
          <Link to={this.props.link} className={cls('navigation__step__link')}>
            {this.props.step}
          </Link>
        ) : (
          <>
            <span
              className={cls('navigation__step__current__dot')}
              style={
                this.state.moveToOriginalPlace
                  ? {transform: 'translateX(' + 0 + 'px)'}
                  : {transform: 'translateX(' + X + 'px)'}
              }
            />
            <span className={cls('navigation__step__current')}>{this.props.step}</span>
          </>
        )}
      </div>
    );
  }
}

export default NavigationStep;
