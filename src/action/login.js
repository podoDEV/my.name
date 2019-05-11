export const LOGIN_SAGA = 'LOGIN_SAGA';
export const SOCIAL_LOGIN_SAGA = 'SOCIAL_LOGIN_SAGA';

export const login = (email, password) => ({
  type: LOGIN_SAGA,
  email,
  password
});

export const socialLogin = (accessToken, provider) => ({
  type: SOCIAL_LOGIN_SAGA,
  accessToken,
  provider
});
