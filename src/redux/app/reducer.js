import { DO_CLEAR_APPSTATE_AUTH_ACTION } from "../auth/actions";
import { appState } from "./state";
import { DO_CLEAR_APPSTATE_APP_ACTION } from "./actions";

const { authReducer } = require("../auth/reducer");

const appReducer = (state, action) => {
    switch (action.type) {
        case DO_CLEAR_APPSTATE_APP_ACTION:
            return appState();
        default:
            return {
                authState: authReducer(state.authState, action),
            }
    }
}

export { appReducer }