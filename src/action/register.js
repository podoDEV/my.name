export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name
});

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password
});
