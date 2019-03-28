import {CHANGE_STEP} from '../action/registerNavigation';

export default (
  state = {
    prevStep: -1,
    currentStep: 0
  },
  action
) => {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        prevStep: state.currentStep,
        currentStep: action.step
      };
    default:
      return state;
  }
};
