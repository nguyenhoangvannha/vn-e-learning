import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction } from './auth/actions'
import { LoadStatus } from '../core/status'
import { DoGetTotalNumerCoursesCourseAction, DoGetTopNewCourseAction, DoGetTopSellCourseAction, DoGetTopRateCourseAction, DoGetRecommendCourseCourseAction, DoGetAllCategoryCourseAction, DoGetFavouritesCourseAction } from './course/actions';
import { DoGetAllInstructor } from './instructor/actions';

function* onAuthStatusChange(action) {
    if (action.payload.statusKey === AuthAction.DoLoginAuthAction) {
        if (action.payload.status.loadStatus == LoadStatus.success) {
            var data = action.payload.status.data; // token and userInfo

            console.log('DEBUG RED', data)

            yield put(DoGetTopNewCourseAction());
            yield put(DoGetTopSellCourseAction());
            yield put(DoGetTopRateCourseAction());
            yield put(DoGetAllInstructor());
            yield put(DoGetRecommendCourseCourseAction(data.userInfo.id));
            yield put(DoGetAllCategoryCourseAction());
            yield put(DoGetFavouritesCourseAction());
        }
    }
}


function* redirectAuthMiddleware() {
    yield takeEvery(AuthAction.SetStatusAuthAction, onAuthStatusChange)
}

export { redirectAuthMiddleware }