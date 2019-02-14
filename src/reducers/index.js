import {TEST} from '../action/register';

export default (state = {}, actions) => {
  switch (actions.type) {
    case TEST:
      return {};
    default:
      return state;
  }
};
