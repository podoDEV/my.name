/* eslint-disable */
let apiDomain;

if (process.env.NODE_ENV === 'development') {
  // apiDomain = 'http://dev.myshort.info:7777/api';
  apiDomain = 'http://myshort.info/api';
} else {
  apiDomain = 'http://myshort.info/api';
}

export const login = () => `${apiDomain}/login`;
export const socailLogin = (provider) => `${apiDomain}/auth/login/${provider}`;
export const signUp = () => `${apiDomain}/signup`;
export const members = () => `${apiDomain}/members`;
