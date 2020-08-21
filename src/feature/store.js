import { appReducer } from "./app/reducer";

import { createStore, applyMiddleware } from 'redux'
import { appState } from "./app/state";
import createSagaMiddleware from 'redux-saga'
import { mySaga } from "./auth/middlewares";
import { appMiddlewares } from "./app/middlewares";

import { createLogger } from 'redux-logger'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
    diff: false,
    stateTransformer: (state) => {}
  });

const store = createStore(appReducer, appState(), applyMiddleware(logger, sagaMiddleware))

// then run the saga
sagaMiddleware.run(appMiddlewares)

export { store }