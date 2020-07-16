import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SET_STATUS_COURSE_ACTION } from "./actions";

export const courseReducer = (courseState, action) => {
    switch (action.type) {
        case SET_STATUS_COURSE_ACTION:
            const status = { ...courseState.status };

            status[action.payload.statusKey] = action.payload.status;

            return {
                ...courseState,
                status: status,
            }
        default:
            return courseState;
    }
}