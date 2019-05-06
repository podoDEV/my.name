import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_NAME,
  ADD_INTEREST,
  REMOVE_INTEREST,
  ADD_SOCIAL_LINK,
  REMOVE_SOCIAL_LINK,
  CHANGE_JOB,
  CHANGE_COMPANY,
  CHANGE_GENDER,
  CHANGE_LOCATION,
  CHANGE_PHILOSOPHY,
  CHANGE_CONTACT
} from '../action/register';

export default (
  state = {
    email: '',
    password: '',
    name: '',
    interest: [],
    socialLinks: [],
    job: '',
    company: '',
    gender: '',
    location: '',
    philosophy: '',
    contact: ''
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
    case ADD_INTEREST:
      return {
        ...state,
        interest: [...state.interest, action.interest]
      };
    case REMOVE_INTEREST:
      return {
        ...state,
        interest: state.interest.filter((int) => int !== action.title)
      };
    case ADD_SOCIAL_LINK:
      return {
        ...state,
        socialLinks: [...state.socialLinks, action.socialLink]
      };
    case REMOVE_SOCIAL_LINK:
      return {
        ...state,
        socialLinks: state.socialLinks.filter((link) => link !== action.socialLink)
      };
    case CHANGE_JOB:
      return {
        ...state,
        job: action.job
      };
    case CHANGE_COMPANY:
      return {
        ...state,
        company: action.company
      };
    case CHANGE_GENDER:
      return {
        ...state,
        gender: action.gender
      };
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.location
      };
    case CHANGE_PHILOSOPHY:
      return {
        ...state,
        philosophy: action.philosophy
      };
    case CHANGE_CONTACT:
      return {
        ...state,
        contact: action.contact
      };
    default:
      return state;
  }
};
