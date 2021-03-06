import {createStore, applyMiddleware, compose} from 'redux';
import ReduxFreeze from 'redux-freeze';
import createSagaMiddleware from 'redux-saga';
import browserHistory from './browserHistory';

import {routerMiddleware} from 'react-router-redux';

import reducers from './reducers';

const initialState = {
  register: {
    name: ''
  },
  router: {}
};

let enhancer;

/**
 * Named export - sagaMiddleware :: Redux-saga Middleware
 * @type {SagaMiddleware}
 */
export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  enhancer = composeEnhancers(applyMiddleware(...middlewares, ReduxFreeze));
} else {
  enhancer = applyMiddleware(...middlewares);
}

const store = createStore(reducers, initialState, enhancer);

export default store;
