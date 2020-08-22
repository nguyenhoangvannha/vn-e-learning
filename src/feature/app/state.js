import { authState } from "../auth/state"
import { courseState } from "../course/state"
import { userState } from "../user/state"
import { instructorState } from "../instructor/state"

const appState = () => {
    return {
        authState: authState(),
        courseState: courseState(),
        userState: userState(),
        instructorState: instructorState(),
    }
}

export { appState }