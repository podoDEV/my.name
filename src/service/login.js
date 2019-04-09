import axios from './axios';
import * as url from '../apiUrl';

export function login({email, password}) {
  return axios.post(url.login(), {email, password});
}
