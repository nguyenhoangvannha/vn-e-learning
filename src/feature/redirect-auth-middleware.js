import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction } from './auth/actions'
import { LoadStatus } from '../core/status'
import { DoGetTotalNumerCoursesCourseAction, DoGetTopNewCourseAction } from './course/actions';

function* onAuthStatusChange(action) {
    if (action.payload.statusKey === AuthAction.DoLoginAuthAction) {
        if (action.payload.status.loadStatus == LoadStatus.success) {
            yield put(DoGetTopNewCourseAction());
        }
    }
}


function* redirectAuthMiddleware() {
    yield takeEvery(AuthAction.SetStatusAuthAction, onAuthStatusChange)
}

export { redirectAuthMiddleware }