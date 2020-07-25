import { DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION, SET_STATUS_COURSE_ACTION, SET_ADD_COURSE_ACTION, SET_ADD_TOP_NEW_COURSE_ACTION } from "./actions";

export const courseReducer = (courseState, action) => {
    switch (action.type) {
        case SET_STATUS_COURSE_ACTION:
            const status = { ...courseState.status };

            status[action.payload.statusKey] = action.payload.status;

            return {
                ...courseState,
                status: status,
            }
        case SET_ADD_COURSE_ACTION:
            return {
                ...courseState,
                courses: {
                    ...courseState.courses,
                    ...action.payload.courses
                }
            }
            break;
        case SET_ADD_TOP_NEW_COURSE_ACTION:
            var topNewCourses = new Set([...courseState.topNewCourses, ...action.payload.courseIds])
            console.log('DEBUG ADDX', topNewCourses)
            return {
                ...courseState,
                topNewCourses: topNewCourses
            }
            break;
        default:
            return courseState;
    }
}