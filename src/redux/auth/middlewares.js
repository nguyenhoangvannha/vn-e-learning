import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction } from './actions';
import { AuthRepo } from '../../repo/auth/auth-repo';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    const res = yield AuthRepo.login(action.payload.username, action.payload.password);
    console.log('Login await:', res.data)

    //const user //= yield call(Api.fetchUser, action.payload.userId);
    //yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    console.log('Login catch', e)
    //yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authMiddlewares() {
  yield takeEvery(AuthAction.DO_LOGIN_AUTH_ACTION, login);
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