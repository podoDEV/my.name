import {delay} from 'redux-saga';
import {spawn} from 'redux-saga/effects';

import login from './login';
import {handleError} from './handleError';

export default function* root() {
  try {
    yield spawn(login);
  } catch (err) {
    yield delay(10);
    yield handleError(err);
  }
}
