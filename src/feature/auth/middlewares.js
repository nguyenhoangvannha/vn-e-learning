import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction, SetUserTokenAuthAction, SetUserInfoAuthAction, SetStatusAuthAction, DoClearAppStateAuthAction, DO_REGISTER_AUTH_ACTION, DO_SEND_FORGET_PASSWORD_EMAIL_AUTH_ACTION } from './actions';
import { Status } from '../../core/status'
import { AuthRepo } from './repo/auth-repo';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    yield put(SetStatusAuthAction(AuthAction.DoLoginAuthAction, Status.loading()))

    const res = yield AuthRepo.login(action.payload.email, action.payload.password);

    yield put(SetUserTokenAuthAction(res.data.token))
    yield put(SetUserInfoAuthAction(res.data.userInfo))
    yield put(SetStatusAuthAction(AuthAction.DoLoginAuthAction, Status.success('Success', res.data)))

  } catch (e) {
    yield put(SetStatusAuthAction(AuthAction.DoLoginAuthAction, Status.error(e.message)))
  }
}

function* register(action) {
  try {
    var statusKey = DO_REGISTER_AUTH_ACTION;

    yield put(SetStatusAuthAction(statusKey, Status.loading()))

    var payload = action.payload;

    const res = yield AuthRepo.register(payload.email, payload.username, payload.phone, payload.password);

    yield put(SetUserTokenAuthAction(res.data.token))
    yield put(SetUserInfoAuthAction(res.data.userInfo))
    yield put(SetStatusAuthAction(statusKey, Status.success()))

  } catch (e) {
    yield put(SetStatusAuthAction(statusKey, Status.error(e.message)))
  } finally {
    yield put(SetStatusAuthAction(statusKey, Status.idle()))
  }
}

function* logout(action) {
  try {
    yield put(SetStatusAuthAction(AuthAction.DoLogoutAuthAction, Status.loading()))
    yield put(DoClearAppStateAuthAction())
    yield put(SetStatusAuthAction(AuthAction.DoLogoutAuthAction, Status.success()))
  } catch (e) {
    yield put(SetStatusAuthAction(AuthAction.DoLogoutAuthAction, Status.error(e.message)))
  }
}

function* sendForgetPasswordEmail(action) {
  try {
    var statusKey = DO_SEND_FORGET_PASSWORD_EMAIL_AUTH_ACTION;

    yield put(SetStatusAuthAction(statusKey, Status.loading()))

    yield put(SetStatusAuthAction(statusKey, Status.success()))
    return;

    var payload = action.payload;

    const res = yield AuthRepo.sendForgetPasswordEmail(payload.email);

    yield put(SetStatusAuthAction(statusKey, Status.success()))

  } catch (e) {
    yield put(SetStatusAuthAction(statusKey, Status.error(e.message)))
  } finally {
    yield put(SetStatusAuthAction(statusKey, Status.idle()))
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authMiddlewares() {
  yield takeEvery(AuthAction.DoLoginAuthAction, login);
  yield takeEvery(AuthAction.DoLogoutAuthAction, logout);
  yield takeEvery(DO_REGISTER_AUTH_ACTION, register);
  yield takeEvery(DO_SEND_FORGET_PASSWORD_EMAIL_AUTH_ACTION, sendForgetPasswordEmail);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export { authMiddlewares };