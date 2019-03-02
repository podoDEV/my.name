import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import SwipeableRoutes from 'react-swipeable-routes';
import './st/css/reset.css';
import './st/css/index.css';

import Layout from './components/layout';
import Home from './components/home';
import B from './components/B';
import C from './components/C';

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
        <SwipeableRoutes>
          <Route exact path="/" component={Home} />
          <Route path="/B" component={B} />
          <Route path="/C" component={C} />
        </SwipeableRoutes>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
