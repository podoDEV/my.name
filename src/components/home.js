import React from 'react';
import {push as locationPush} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Typing, {Backspace} from 'react-typing-animation';
import {Grid, Row, Col} from 'react-flexbox-grid';

const nameList = ['______', 'jayoung', 'dalin', 'jung', 'heebeom', 'haesung', 'minsoo', 'kijung'];

class Home extends React.Component {
  // handleClick = () => {
  //   this.props.locationPush('/B');
  // };

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12} lg={8} className="front__logo">
            <div className="front__logo__typing">
              my
              <br />
              name
              <br />
              is{' '}
              <Typing loop speed={50} className="front__logo__typing__name">
                {nameList.map((name, idx) => {
                  return (
                    <span key={`${name}__${idx}`}>
                      <span>{name}</span>
                      <Backspace delay={750} count={30} />
                    </span>
                  );
                })}
                <Typing.Reset count={1} delay={500} />
              </Typing>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="front__login">
              <p className="front__login__title">log in</p>
              <div className="front__form front__form-underline">
                <input type="email" name="email" id="email" placeholder="e-mail" />
              </div>
              <div className="front__form">
                <input type="password" name="password" id="password" placeholder="password" />
              </div>
              <Link
                to="/register/first"
                className="front__join__in"
              >
                join in
              </Link>
            </div>
          </Col>
        </Row>
      </Grid>
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
