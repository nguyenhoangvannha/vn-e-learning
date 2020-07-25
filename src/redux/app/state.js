import { authState } from "../auth/state"
import { courseState } from "../course/state"

const appState = () => {
    return {
        authState: authState(),
        courseState: courseState(),
    }
}

export { appState }