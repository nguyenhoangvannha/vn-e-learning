import { authState } from "../auth/state"
import { courseState } from "../course/state"
import { userState } from "../user/state"

const appState = () => {
    return {
        authState: authState(),
        courseState: courseState(),
        userState: userState(),
    }
}

export { appState }