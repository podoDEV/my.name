import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './st/css/reset.css';
import './st/css/index.css';
import './st/css/transition.css';

import Layout from './components/layout';
import Home from './components/home';
import RegisterAPage from './components/registerAPage';
import RegisterBPage from './components/registerBPage';

import browserHistory from './browserHistory';

// connectedRouter component
import {ConnectedRouter} from 'react-router-redux';

import store, {sagaMiddleware} from './store';
// import sagas from './sagas';

// sagaMiddleware.run(sagas);

function App({location}) {
  return (
    <Layout>
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{enter: 300, exit: 300}} classNames="slide">
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/register/first" component={RegisterAPage} />
              <Route path="/register/second" component={RegisterBPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <AppWithRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
