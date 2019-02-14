import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {connect} from 'react-redux';

class B extends React.Component {
  handleClick = () => {
    this.props.locationPush('/C');
  };

  render() {
    return (
      <div>
        B!
        <button onClick={this.handleClick}>go C</button>
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
)(B);
