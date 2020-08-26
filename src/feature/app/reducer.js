import { DO_CLEAR_APPSTATE_AUTH_ACTION } from "../auth/actions";
import { appState } from "./state";
import { DO_CLEAR_APPSTATE_APP_ACTION, DO_CHANGE_LANGUAGE_APP_ACTION, SET_CHANGE_LANGUAGE_APP_ACTION } from "./actions";
import { courseReducer } from "../course/reducer";
import { userReducer } from "../user/reducer";
import { instructorReducer } from "../instructor/reducer";
import i18n from '../../res/i18n'

const { authReducer } = require("../auth/reducer");

const appReducer = (state, action) => {
    switch (action.type) {
        case DO_CLEAR_APPSTATE_APP_ACTION:
            return appState();
        case SET_CHANGE_LANGUAGE_APP_ACTION:
            return {
                ...state,
                language: action.payload.language,
            };
        default:
            return {
                authState: authReducer(state.authState, action),
                courseState: courseReducer(state.courseState, action),
                userState: userReducer(state.userState, action),
                instructorState: instructorReducer(state.instructorState, action)
            }
    }
}

export { appReducer }