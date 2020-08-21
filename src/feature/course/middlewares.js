import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SetStatusCourseAction, DO_GET_TOP_NEW_COURSE_ACTION, SetAddCourseAction, SetAddTopNewCourseAction } from './actions'
import { Status } from '../../core/status'
import { CourseRepo } from '../../repo/course/course-repo'

function* getTotalNumberCourse(action) {
    const statusKey = DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getTotalNumerCourses()
        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* getTopNewCourse(action) {
    const statusKey = DO_GET_TOP_NEW_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getTopNewCourses()

        var courses = res.data.payload.reduce(function (map, course) {
            map[course.id] = course;
            return map;
        }, {});

        yield put(SetAddCourseAction(courses))

        var courseIds = res.data.payload.map((course) => course.id);

        yield put(SetAddTopNewCourseAction(courseIds))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* courseMiddleware() {
    yield takeEvery(DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, getTotalNumberCourse);
    yield takeEvery(DO_GET_TOP_NEW_COURSE_ACTION, getTopNewCourse);
}

export { courseMiddleware }