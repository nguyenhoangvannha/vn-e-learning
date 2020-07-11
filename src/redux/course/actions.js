export const DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION = 'DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION'
export const SET_STATUS_COURSE_ACTION = 'SET_STATUS_COURSE_ACTION'

export const DoGetTotalNumerCoursesCourseAction = () => {
    return {
        type: DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION,
        payload: {
        }
    }
}

export const SetStatusCourseAction = (statusKey, status) => {
    return {
        type: DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}