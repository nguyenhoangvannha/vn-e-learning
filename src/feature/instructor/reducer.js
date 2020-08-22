import { SET_STATUS_INSTRUCTOR_ACTION, SET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION } from "./actions";

function instructorReducer
    (instructorState, action) {
    switch (action.type) {
        case SET_STATUS_INSTRUCTOR_ACTION:

            const statusKey = action.payload.statusKey;

            const status = {
                ...instructorState.status,
            }

            status[statusKey] = action.payload.status


            return {
                ...instructorState,
                status: status
            }
        case SET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION:
            return {
                ...instructorState,
                instructors: {
                    ...instructorState.instructors,
                    ...action.payload.instructors
                }
            }
            break;
        default:
            return instructorState;
    }
}

export { instructorReducer }