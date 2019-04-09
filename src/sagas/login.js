import {call, takeLatest, put, select} from 'redux-saga/effects';
import {LOGIN_SAGA} from '../action/login';
import {login} from '../service/login';
import {handleLoginError} from "./handleError";

export default function*() {
  yield takeLatest(LOGIN_SAGA, loginSaga);
}

function* loginSaga(action) {
  try {
    const {email, password} = action;

    const result = yield call(login, {
      email,
      password
    });

    console.log(result);
  } catch (err) {
    handleLoginError(err);
  }
}
