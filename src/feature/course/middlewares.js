import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SetStatusCourseAction, DO_GET_TOP_NEW_COURSE_ACTION, SetAddCourseAction, SetAddTopNewCourseAction, DO_GET_TOP_SELL_COURSE_ACTION,
    SetAddTopSellCourseAction,
    DO_GET_TOP_RATE_COURSE_ACTION,
    SetAddTopRateCourseAction,
    DO_GET_COURSE_DETAIL_COURSE_ACTION,
    DO_GET_RECOMMEND_COURSE_COURSE_ACTION,
    SetAddRecommendCourseAction,
    DO_GET_ALL_CATEGORY_COURSE_ACTION,
    SetAddCategoriesCourseAction,
    DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION,
    SetCourseByCategoryCourseAction,
    DO_SEARCH_COURSE_COURSE_ACTION,
    SetSearchResultCourseAction,
    DO_GET_FAVOURITES_COURSE_ACTION,
    SetFavouritesCourseAction,
    DO_GET_FREE_COURSE_COURSE_ACTION,
    DO_GET_MY_COURSES_COURSE_COURSE_ACTION,
    SetAddMyCoursesCourseAction
} from './actions'
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

function* getCourseDetail(action) {
    const statusKey = `${DO_GET_COURSE_DETAIL_COURSE_ACTION}${action.payload.courseId}`;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))

        const res = yield CourseRepo.getCourseDetail(action.payload.courseId, action.payload.userId)

        console.log('DEBUG DO_GET_COURSE_DETAIL_COURSE_ACTION', Date.now().toString())

        var courseDetail = res.data.payload;

        var courses = {}

        courses[courseDetail.id] = courseDetail

        yield put(SetAddCourseAction(courses))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* getRecommendCourses(action) {
    const statusKey = DO_GET_RECOMMEND_COURSE_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getRecommendCourses(action.payload.userId, action.payload.limit, action.payload.offset)

        var courses = res.data.payload.reduce(function (map, course) {
            map[course.id] = course;
            return map;
        }, {});

        yield put(SetAddCourseAction(courses))

        var recommendCourses = res.data.payload.map((course) => course.id);

        yield put(SetAddRecommendCourseAction(recommendCourses))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}



function* getAllCategory(action) {
    const statusKey = DO_GET_ALL_CATEGORY_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))

        const res = yield CourseRepo.getAllCategory()

        var categories = res.data.payload.reduce(function (map, item) {
            map[item.id] = item;
            return map;
        }, {});

        yield put(SetAddCategoriesCourseAction(categories))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* getCategoryCourses(action) {
    const statusKey = DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))

        var category = action.payload.category

        const res = yield CourseRepo.getCategoryCourses(category)

        var coursesByCategory = {};

        coursesByCategory[category] = res.data.payload.rows

        yield put(SetCourseByCategoryCourseAction(coursesByCategory))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* searchCourses(action) {
    const statusKey = DO_SEARCH_COURSE_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))

        var payload = action.payload

        const res = yield CourseRepo.searchCourses(payload.keyword)

        yield put(SetSearchResultCourseAction(res.data?.payload?.rows ?? []))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    } finally {
        yield put(SetStatusCourseAction(statusKey, Status.idle()))
    }
}

function* getFavouriteCourses(action) {
    const statusKey = DO_GET_FAVOURITES_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))

        const res = yield CourseRepo.getFavouriteCourses()

        yield put(SetFavouritesCourseAction(res.data?.payload ?? []))

        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    } finally {
        yield put(SetStatusCourseAction(statusKey, Status.idle()))
    }
}

function* getFreeCourse(action) {
    const statusKey = DO_GET_FREE_COURSE_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getFreeCourse(action.payload.courseId)
        yield put(SetStatusCourseAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusCourseAction(statusKey, Status.error(e.message)))
    }
}

function* getMyCourses(action) {
    const statusKey = DO_GET_MY_COURSES_COURSE_COURSE_ACTION;

    try {
        yield put(SetStatusCourseAction(statusKey, Status.loading()))
        const res = yield CourseRepo.getMyCourses()
        
        var courses = res.data.payload.reduce(function (map, course) {
            map[course.id] = course;
            return map;
        }, {});

        yield put(SetAddMyCoursesCourseAction(courses))

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
    yield takeEvery(DO_GET_COURSE_DETAIL_COURSE_ACTION, getCourseDetail);
    yield takeEvery(DO_GET_RECOMMEND_COURSE_COURSE_ACTION, getRecommendCourses);
    yield takeEvery(DO_GET_ALL_CATEGORY_COURSE_ACTION, getAllCategory);
    yield takeEvery(DO_GET_COURSE_BY_CATEGORY_COURSE_ACTION, getCategoryCourses);
    yield takeEvery(DO_SEARCH_COURSE_COURSE_ACTION, searchCourses);
    yield takeEvery(DO_GET_FAVOURITES_COURSE_ACTION, getFavouriteCourses);
    yield takeEvery(DO_GET_FREE_COURSE_COURSE_ACTION, getFreeCourse);
    yield takeEvery(DO_GET_MY_COURSES_COURSE_COURSE_ACTION, getMyCourses);
}

export { courseMiddleware }