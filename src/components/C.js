import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {connect} from 'react-redux';

class C extends React.Component {
  handleClick = () => {
    this.props.locationPush('/');
  };

  render() {
    return (
      <div>
        C!
        <button onClick={this.handleClick}>go A</button>
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
)(C);
