import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {push as locationPush} from 'react-router-redux';

import Input from './register/input';
import {changeName, changePassword} from '../action/register';
import {emailRegister} from '../validation';

class RegisterAPage extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired
  };
  render() {
    const {name, changeName, password, changePassword} = this.props;

    return (
      <div style={{padding: '10%'}}>
        <Input
          type="text"
          value={name}
          onChange={(ev) => changeName(ev.target.value)}
          fontSize="30px"
          placeholder="email"
          validator={emailRegister}
        />
        <Input
          type="password"
          value={password}
          onChange={(ev) => changePassword(ev.target.value)}
          fontSize="30px"
          placeholder="password"
        />
        <Input
          type="password"
          value={password}
          onChange={(ev) => changePassword(ev.target.value)}
          fontSize="150px"
          placeholder="big font"
        />
        <Input
          type="password"
          value={password}
          onChange={(ev) => changePassword(ev.target.value)}
          fontSize="16px"
          placeholder="small font"
        />
        <Link 
          to="/register/second"
        >
          go C
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, password} = state.register;

  return {
    name,
    password
  };
};

const mapDispatchToProps = {
  locationPush,
  changeName,
  changePassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterAPage);
