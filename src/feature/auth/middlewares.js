import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction, SetUserTokenAuthAction, SetUserInfoAuthAction, SetStatusAuthAction, DoClearAppStateAuthAction } from './actions';
import { Status } from '../../core/status'
import { AuthRepo } from './repo/auth-repo';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    yield put(SetStatusAuthAction(AuthAction.DoLoginAuthAction, Status.loading()))

    const res = yield AuthRepo.login(action.payload.email, action.payload.password);

    yield put(SetUserTokenAuthAction(res.data.token))
    yield put(SetUserInfoAuthAction(res.data.userInfo))
    yield put(SetStatusAuthAction(AuthAction.DoLoginAuthAction, Status.success()))

  } catch (e) {
    yield put(SetStatusAuthAction(AuthAction.DoLoginAuthAction, Status.error(e.message)))
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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authMiddlewares() {
  yield takeEvery(AuthAction.DoLoginAuthAction, login);
  yield takeEvery(AuthAction.DoLogoutAuthAction, logout);
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