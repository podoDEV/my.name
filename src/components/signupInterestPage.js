import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SearchInput from './register/searchInput';
import Tag from './tag';
import Navigation from './register/navigation';
import {addInterest, removeInterest} from '../action/register';
import {changeStep} from '../action/registerNavigation';

class SignupInterestPage extends React.Component {
  pageIndex = 2;

  state = {
    interestInput: ''
  };

  onChangeInterestInput = (input) => {
    this.setState({
      interestInput: input
    });
  };

  static propTypes = {
    interest: PropTypes.array.isRequired,
    changeStep: PropTypes.func.isRequired,
    removeInterest: PropTypes.func.isRequired,
    addInterest: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  render() {
    const {interestInput} = this.state;
    const {interest, addInterest, removeInterest} = this.props;

    return (
      <div className="front__register">
        <div className="front__register__navigation">
          <Navigation />
        </div>
        <div className="front__register__input">
          <SearchInput
            type="text"
            value={interestInput}
            changerValue={this.onChangeInterestInput}
            onChange={(ev) => this.onChangeInterestInput(ev.target.value)}
            fontSize="70px"
            placeholder="search"
            clickResult={addInterest}
          />
        </div>
        <div className="front__register__tag__container">
          {interest.map((interest) => (
            <Tag title={interest} removeInterest={removeInterest} key={interest} />
          ))}
        </div>
        <div className="front__register__next">
          <Link to="/signup/social" className="front__register__next__title">
            done
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {interest} = state.register;

  return {
    interest
  };
};

const mapDispatchToProps = {
  locationPush,
  addInterest,
  removeInterest,
  changeStep
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupInterestPage);
