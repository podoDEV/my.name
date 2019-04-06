import {CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_NAME, CHANGE_IDENTIFICATION, CHANGE_INTEREST} from '../action/register';

export default (
  state = {
    email: '',
    password: '',
    name: '',
    identification: '',
    interest: ''
  },
  action
) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
    case CHANGE_IDENTIFICATION:
      return {
        ...state,
        identification: action.identification
      };
    case CHANGE_INTEREST:
      return {
        ...state,
        interest: action.interest
      };
    default:
      return state;
  }
};
