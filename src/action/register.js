export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_INTEREST = 'ADD_INTEREST';
export const REMOVE_INTEREST = 'REMOVE_INTEREST';
export const ADD_SOCIAL_LINK = 'ADD_SOCIAL_LINK';
export const REMOVE_SOCIAL_LINK = 'REMOVE_SOCIAL_LINK';
export const CHANGE_JOB = 'CHANGE_JOB';
export const CHANGE_COMPANY = 'CHANGE_COMPANY';
export const CHANGE_GENDER = 'CHANGE_GENDER';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const CHANGE_PHILOSOPHY = 'CHANGE_PHILOSOPHY';
export const CHANGE_CONTACT = 'CHANGE_CONTACT';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password
});

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name
});

export const removeInterest = (title) => ({
  type: REMOVE_INTEREST,
  title
});

export const addInterest = (interest) => ({
  type: ADD_INTEREST,
  interest
});

export const addSocialLink = (socialLink) => ({
  type: ADD_SOCIAL_LINK,
  socialLink
});

export const removeSocialLink = (socialLink) => ({
  type: REMOVE_SOCIAL_LINK,
  socialLink
});

export const changeJob = (job) => ({
  type: CHANGE_JOB,
  job
});

export const changeCompany = (company) => ({
  type: CHANGE_COMPANY,
  company
});

export const changeGender = (gender) => ({
  type: CHANGE_GENDER,
  gender
});

export const changeLocation = (location) => ({
  type: CHANGE_LOCATION,
  location
});

export const changePhilosophy = (philosophy) => ({
  type: CHANGE_PHILOSOPHY,
  philosophy
});

export const changeContact = (contact) => ({
  type: CHANGE_CONTACT,
  contact
});
