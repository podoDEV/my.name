import {combineReducers as combine} from 'redux';
import {routerReducer} from 'react-router-redux';

import register from './register';

export default combine({
  register,
  router: routerReducer
});
