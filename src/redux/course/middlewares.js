import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SetStatusCourseAction } from './actions'
import { Status } from '../../core/status'
import { CourseRepo } from '../../repo/course/course-repo'

function* getTotalNumberCourse(action) {
    const statusKey = DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION;
    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        var res = yield CourseRepo.getTotalNumerCourses()
        yield put(SetStatusCourseAction(statusKey, Status.success(res.data)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* courseMiddleware() {
    yield takeEvery(DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, getTotalNumberCourse)
}

export { courseMiddleware }