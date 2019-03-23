import {CHANGE_NAME, CHANGE_PASSWORD} from '../action/register';

export default (
  state = {
    name: '',
    password: ''
  },
  action
) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
};
