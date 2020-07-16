import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction, DO_CLEAR_APPSTATE_AUTH_ACTION } from './auth/actions'
import { ClearAppStateAppAction } from './app/actions'
import { LoadStatus } from '../core/status'
import { DoGetTotalNumerCoursesCourseAction } from './course/actions';

function* onAuthStatusChange(action) {
    console.log('DEBUG onAuthStatusChange', action)
    if(action.payload.statusKey === AuthAction.DoLoginAuthAction){
        if(action.payload.status.loadStatus == LoadStatus.success){
            yield put(DoGetTotalNumerCoursesCourseAction());
        }
    }
}


function* redirectAuthMiddleware() {
    yield takeEvery(AuthAction.SetStatusAuthAction, onAuthStatusChange)
}

export { redirectAuthMiddleware }