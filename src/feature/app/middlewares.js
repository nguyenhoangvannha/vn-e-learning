// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
import { authMiddlewares } from '../auth/middlewares';
import {redirectAppMiddleware} from '../redirect-app-middleware'
import { courseMiddleware } from '../course/middlewares';
import { redirectAuthMiddleware } from '../redirect-auth-middleware';
import { userMiddlewares } from '../user/middlewares';
import { instructorMiddlewares } from '../instructor/middlewares';
// Imports: Redux Sagas

export function* appMiddlewares() {
    yield all([
        fork(authMiddlewares),
        fork(redirectAppMiddleware),
        fork(courseMiddleware),
        fork(redirectAuthMiddleware),
        fork(userMiddlewares),
        fork(instructorMiddlewares),
    ]);
};