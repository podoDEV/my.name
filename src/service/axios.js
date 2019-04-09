/**
 * @fileoverview 각 API별 axios 인스턴스
 */

import rawAxios from 'axios';

// Default axios
// @TODO: CORS 제거 필요
const axios = rawAxios.create({
  // withCredentials: true,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Cache-Control': 'no-cache'
  }
});
// addDummyParam(axios);

export default axios;
