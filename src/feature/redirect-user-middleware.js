// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { AuthAction } from './auth/actions'
// import { LoadStatus } from '../core/status'
// import { DoGetTotalNumerCoursesCourseAction, DoGetTopNewCourseAction, DoGetTopSellCourseAction, DoGetTopRateCourseAction, DoGetRecommendCourseCourseAction, DoGetAllCategoryCourseAction, DoGetFavouritesCourseAction } from './course/actions';
// import { DoGetAllInstructor } from './instructor/actions';
// import { SET_STATUS_USER_ACTION, DO_ADD_FAVOURITE_COURSE_USER_ACTION } from './user/actions';

// function* onUserStatusChange(action) {
//     if (action.payload.statusKey.includes(DO_ADD_FAVOURITE_COURSE_USER_ACTION)) {
//         if (action.payload.status.loadStatus == LoadStatus.success) {
//             yield put(DoGetFavouritesCourseAction());
//         }
//     }
// }


// function* redirectAuthMiddleware() {
//     yield takeEvery(SET_STATUS_USER_ACTION, onUserStatusChange)
// }

// export { redirectAuthMiddleware }