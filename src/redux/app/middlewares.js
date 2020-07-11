// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
import { authMiddlewares } from '../auth/middlewares';
// Imports: Redux Sagas

export function* appMiddlewares() {
    yield all([
        fork(authMiddlewares),
    ]);
};