export const LOGIN_SAGA = 'LOGIN_SAGA';

export const login = (email, password) => ({
  type: LOGIN_SAGA,
  email,
  password
});
