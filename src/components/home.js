import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends React.Component {
  // handleClick = () => {
  //   this.props.locationPush('/B');
  // };

  render() {
    return (
      <div className="front__main">
        <div className="front__logo">
          my
          <br />
          name
          <br />
          is ____
        </div>
        <div className="front__login">
          <p className="front__login__title">log in</p>
          <div className="front__form front__form-underline">
            <input type="email" name="email" id="email" placeholder="e-mail" />
          </div>
          <div className="front__form">
            <input type="password" name="password" id="password" placeholder="password" />
          </div>
          <Link
            to={{
              pathname: '/B',
              state: {prev: false}
            }}
            className="front__join__in"
          >
            join in
          </Link>
        </div>
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
)(Home);
