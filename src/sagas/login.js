import {call, takeLatest} from 'redux-saga/effects';
import {LOGIN_SAGA, SOCIAL_LOGIN_SAGA} from '../action/login';
import {login, socialLogin} from '../service/login';
import {handleLoginError} from './handleError';

export default function*() {
  yield takeLatest(LOGIN_SAGA, loginSaga);
  yield takeLatest(SOCIAL_LOGIN_SAGA, socialLoginSaga);
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

function* socialLoginSaga(action) {
  try {
    const {accessToken, provider} = action;

    const result = yield call(socialLogin, {
      accessToken,
      provider
    });

    console.log(result);
  } catch (err) {
    handleLoginError(err);
  }
}
