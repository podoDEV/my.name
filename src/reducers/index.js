import {combineReducers as combine} from 'redux';
import {routerReducer} from 'react-router-redux';

import register from './register';
import registerNavigation from './registerNavigation';

export default combine({
  register,
  registerNavigation,
  router: routerReducer
});
