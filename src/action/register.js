export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_IDENTIFICATION = 'CHANGE_IDENTIFICATION';
export const CHANGE_INTEREST = 'CHANGE_INTEREST';

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

export const changeIdentification = (identification) => ({
  type: CHANGE_IDENTIFICATION,
  identification
});

export const changeInterest = (interest) => ({
  type: CHANGE_INTEREST,
  interest
});