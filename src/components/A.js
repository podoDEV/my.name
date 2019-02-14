import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {connect} from 'react-redux';

class A extends React.Component {
  handleClick = () => {
    this.props.locationPush('/B');
  };

  render() {
    return (
      <div>
        A!
        <button onClick={this.handleClick}>go B</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  locationPush
};

export default connect(
  null,
  mapDispatchToProps
)(A);
