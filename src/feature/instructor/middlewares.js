import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Status } from '../../core/status'
import { DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION, SetStatusInstructor, SetAddInstructor, DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION } from './actions';
import { InstructorRepo } from './repo/repo';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getAllInstructor(action) {
  try {
    var statusKey = DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION
    yield put(SetStatusInstructor(statusKey, Status.loading()))

    const res = yield InstructorRepo.getAllInstructor();
    var instructors = res.data.payload.reduce(function (map, item) {
      map[item.id] = item;
      return map;
    }, {});

    yield put(SetAddInstructor(instructors))

    yield put(SetStatusInstructor(statusKey, Status.success()))

  } catch (e) {
    yield put(SetStatusInstructor(statusKey, Status.error(e.message)))
  }
}

function* getInstructorDetails(action) {
  try {
    var statusKey = `${DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION}${action.payload.instructorId}`
    yield put(SetStatusInstructor(statusKey, Status.loading()))

    const res = yield InstructorRepo.getInstructorDetails(action.payload.instructorId);
    var instructors = {}

    instructors[res.data.payload.id] = res.data.payload

    yield put(SetAddInstructor(instructors))

    yield put(SetStatusInstructor(statusKey, Status.success()))

  } catch (e) {
    yield put(SetStatusInstructor(statusKey, Status.error(e.message)))
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* instructorMiddlewares() {
  yield takeEvery(DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION, getAllInstructor);
  yield takeEvery(DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION, getInstructorDetails);
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

export { instructorMiddlewares };