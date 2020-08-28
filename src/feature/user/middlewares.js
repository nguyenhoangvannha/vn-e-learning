import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Status } from '../../core/status'
import { DO_ADD_FAVOURITE_COURSE_USER_ACTION, SetStatusUserAction, DO_UPDATE_BASIC_PROFILE_USER_ACTION } from './actions';
import { UserRepo } from './repo/user_repo';
import { DoGetFavouritesCourseAction } from '../course/actions';
import { SetUserInfoAuthAction } from '../auth/actions';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addFavouriteCourse(action) {
  try {
    var statusKey = `${DO_ADD_FAVOURITE_COURSE_USER_ACTION}${action.payload.courseId}`
    yield put(SetStatusUserAction(statusKey, Status.loading()))

    const res = yield UserRepo.addFavouriteCourse(action.payload.courseId);

    yield put(DoGetFavouritesCourseAction());

    yield put(SetStatusUserAction(statusKey, Status.success(res.data.message, res.data.likeStatus)))

  } catch (e) {
    yield put(SetStatusUserAction(statusKey, Status.error(e.message)))
  }
}

function* updateBasicProfile(action) {
  try {
    var statusKey = `${DO_UPDATE_BASIC_PROFILE_USER_ACTION}`
    yield put(SetStatusUserAction(statusKey, Status.loading()))

    const payload = action.payload;

    const res = yield UserRepo.updateBasicProfile(payload.username, payload.phone, payload.avatar);

    yield put(SetUserInfoAuthAction(res.data.userInfo))

    yield put(SetStatusUserAction(statusKey, Status.success(res.data.message, res.data.userInfo)))

  } catch (e) {
    yield put(SetStatusUserAction(statusKey, Status.error(e.message)))
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* userMiddlewares() {
  yield takeEvery(DO_ADD_FAVOURITE_COURSE_USER_ACTION, addFavouriteCourse);
  yield takeEvery(DO_UPDATE_BASIC_PROFILE_USER_ACTION, updateBasicProfile);
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

export { userMiddlewares };