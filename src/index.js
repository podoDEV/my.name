import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import './st/css/reset.css';
import './st/css/index.css';

import Layout from './components/layout';
import Home from './components/home';
import RegisterAPage from './components/registerAPage';
import RegisterBPage from './components/registerBPage';
import RegisterCPage from './components/registerCPage';

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
          <Route path="/register/first" component={RegisterAPage} />
          <Route path="/register/second" component={RegisterBPage} />
          <Route path="/register/third" component={RegisterCPage} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
