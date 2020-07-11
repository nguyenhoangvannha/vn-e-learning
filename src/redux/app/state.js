import { authState } from "../auth/state"

const appState = () => {
    return {
        authState: authState(),
    }
}

export {appState}