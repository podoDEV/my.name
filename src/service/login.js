import axios from './axios';
import * as url from '../apiUrl';
import {socialLoginProvider} from '../constant';

export function login({email, password}) {
  return axios.post(url.login(), {email, password});
}

export function socialLogin({accessToken, provider}) {
  return axios.post(url.socailLogin(provider), {accessToken});
}
