import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction, SetUserTokenAuthAction, SetUserInfoAuthAction, SetLoginStatusAuthAction } from './actions';
import { AuthRepo } from '../../repo/auth/auth-repo';
import { Status } from '../../core/status'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    yield put(SetLoginStatusAuthAction(Status.loading()))

    const res = yield AuthRepo.login(action.payload.email, action.payload.password);

    yield put(SetUserTokenAuthAction(res.data.token))
    yield put(SetUserInfoAuthAction(res.data.userInfo))
    yield put(SetLoginStatusAuthAction(Status.success()))

  } catch (e) {
    yield put(SetLoginStatusAuthAction(Status.error(e.message)))
    //yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authMiddlewares() {
  yield takeEvery(AuthAction.DoLoginAuthAction, login);
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