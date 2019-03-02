import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class C extends React.Component {
  handleClick = () => {
    this.props.locationPush('/');
  };

  render() {
    return (
      <div style={{ height: 300, backgroundColor: "green" }}>
        C!
        <Link to='/'>
          go A
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
)(C);
