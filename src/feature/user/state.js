import { Status } from "../../core/status";
import { DO_ADD_FAVOURITE_COURSE_USER_ACTION } from "./actions";


const userState = () => {
    return {
        status: {
            DO_ADD_FAVOURITE_COURSE_USER_ACTION: Status.idle(),
        }
    }
}

export { userState }