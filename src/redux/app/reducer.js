import { appState } from "./state";

const { authReducer } = require("../auth/reducer");

const appReducer = (state, action) => {
    return {
        authState: authReducer(state.authState, action),
    }
}

export { appReducer }