import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import './st/css/reset.css';
import './st/css/index.css';

import Layout from './components/layout';
import Home from './components/home';
import SignupEmailPage from './components/signupEmailPage';
import SignupNamePage from './components/signupNamePage';
import SignupInterestPage from './components/signupInterestPage';
import SignupSocialPage from './components/signupSocialPage';
import SignupMorePage from './components/signupMorePage';

import browserHistory from './browserHistory';

// connectedRouter component
import {ConnectedRouter} from 'react-router-redux';

import store, {sagaMiddleware} from './store';
// import sagas from './sagas';

// sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup/email" component={SignupEmailPage} />
          <Route path="/signup/name" component={SignupNamePage} />
          <Route path="/signup/interest" component={SignupInterestPage} />
          <Route path="/signup/social" component={SignupSocialPage} />
          <Route path="/signup/more" component={SignupMorePage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
