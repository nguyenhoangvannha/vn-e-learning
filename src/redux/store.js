import { appReducer } from "./app/reducer";

import { createStore, applyMiddleware } from 'redux'
import { appState } from "./app/state";
import logger from 'redux-logger'



const store = createStore(appReducer, appState, applyMiddleware(logger))


export { store }