import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {push as locationPush} from 'react-router-redux';
import {changeName} from '../action/register';

class B extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired
  };

  render() {
    const {name, changeName} = this.props;

    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(ev) => changeName(ev.target.value)}
        />
        <Link to="/C">go C</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {name} = state.register;

  return {
    name
  };
};

const mapDispatchToProps = {
  locationPush,
  changeName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(B);
