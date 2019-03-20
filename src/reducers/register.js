import {CHANGE_NAME} from '../action/register';

export default (state = {
  name: ''
}, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};
