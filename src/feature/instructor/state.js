import { Status } from "../../core/status";
import { DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION } from "./actions";


const instructorState = () => {
    return {
        status: {
            DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION: Status.idle(),
        },
        instructors: {

        },
    }
}

export { instructorState }