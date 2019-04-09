import axios from './axios';
import * as url from '../apiUrl';

/**
 * 회원 가입 하기
 * @returns {Axios.Promise}
 */
export function signUp() {
  console.log(url.signUp());
  // return axios.post(url.signUp());
}
