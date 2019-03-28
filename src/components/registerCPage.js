import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from './register/navigation';
import {changeStep} from '../action/registerNavigation';

class RegisterCPage extends React.Component {
  pageIndex = 2;

  static propTypes = {
    changeStep: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.locationPush('/');
  };

  componentDidMount() {
    this.props.changeStep(this.pageIndex);
  }

  render() {
    return (
      <div style={{padding: '10%'}}>
        <Navigation />
        <Link to="/">go home</Link>
      </div>
    );
  }
}

const mapDispatchToProps = {
  locationPush,
  changeStep
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterCPage);
