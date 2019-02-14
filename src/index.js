import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Layout from './components/layout';
import A from './components/A';
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
        <Switch>
          <Route exact path="/" component={A} />
          <Route path="/B" component={B} />
          <Route path="/C" component={C} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
