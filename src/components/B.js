import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class B extends React.Component {
  // handleClick = () => {
  //   this.props.locationPush('/C');
  // };

  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        B!
        <Link
          to='/C'
        >
          go C
        </Link>
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
