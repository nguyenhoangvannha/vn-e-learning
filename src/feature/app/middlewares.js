// Imports: Dependencies
import { all, fork, takeEvery, put } from 'redux-saga/effects';
import { authMiddlewares } from '../auth/middlewares';
import {redirectAppMiddleware} from '../redirect-app-middleware'
import { courseMiddleware } from '../course/middlewares';
import { redirectAuthMiddleware } from '../redirect-auth-middleware';
import { userMiddlewares } from '../user/middlewares';
import { instructorMiddlewares } from '../instructor/middlewares';
import { DO_CHANGE_LANGUAGE_APP_ACTION, SetChangeLanguageAppAction } from './actions';
import i18n from '../../res/i18n';
// Imports: Redux Sagas

function* changeLanguage(action) {
    try {

        const res = yield i18n.changeLanguage(action.payload.language)

        yield put(SetChangeLanguageAppAction(action.payload.language))

    } catch (e) {

        console.log('ERROR DO_CHANGE_LANGUAGE_APP_ACTION', e)
    }
}

export function* appMiddlewares() {
    yield all([
        fork(authMiddlewares),
        fork(redirectAppMiddleware),
        fork(courseMiddleware),
        fork(redirectAuthMiddleware),
        fork(userMiddlewares),
        fork(instructorMiddlewares),
    ]);
    yield takeEvery(DO_CHANGE_LANGUAGE_APP_ACTION, changeLanguage);
};