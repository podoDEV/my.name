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
import SignupIdentificationPage from './components/signupIdentificationPage';
import SignupInterestPage from './components/signupInterestPage';

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
          <Route path="/signup/identification" component={SignupIdentificationPage} />
          <Route path="/signup/interest" component={SignupInterestPage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
