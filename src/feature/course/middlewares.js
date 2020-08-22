import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SetStatusCourseAction, DO_GET_TOP_NEW_COURSE_ACTION, SetAddCourseAction, SetAddTopNewCourseAction, DO_GET_TOP_SELL_COURSE_ACTION,
    SetAddTopSellCourseAction,  
    DO_GET_TOP_RATE_COURSE_ACTION,
    SetAddTopRateCourseAction} from './actions'
import { Status } from '../../core/status'
import { CourseRepo } from './repo/course-repo';

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

function* getTopSellCourse(action) {
    const statusKey = DO_GET_TOP_SELL_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getTopSellCourses()

        var courses = res.data.payload.reduce(function (map, course) {
            map[course.id] = course;
            return map;
        }, {});

        yield put(SetAddCourseAction(courses))

        var courseIds = res.data.payload.map((course) => course.id);

        yield put(SetAddTopSellCourseAction(courseIds))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* getTopRateCourse(action) {
    const statusKey = DO_GET_TOP_RATE_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getTopRateCourses()

        var courses = res.data.payload.reduce(function (map, course) {
            map[course.id] = course;
            return map;
        }, {});

        yield put(SetAddCourseAction(courses))

        var courseIds = res.data.payload.map((course) => course.id);

        yield put(SetAddTopRateCourseAction(courseIds))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* courseMiddleware() {
    yield takeEvery(DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, getTotalNumberCourse);
    yield takeEvery(DO_GET_TOP_NEW_COURSE_ACTION, getTopNewCourse);
    yield takeEvery(DO_GET_TOP_SELL_COURSE_ACTION, getTopSellCourse);
    yield takeEvery(DO_GET_TOP_RATE_COURSE_ACTION, getTopRateCourse);
}

export { courseMiddleware }