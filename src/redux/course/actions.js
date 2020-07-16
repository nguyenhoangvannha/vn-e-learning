export const DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION = 'DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION'
export const SET_STATUS_COURSE_ACTION = 'SET_STATUS_COURSE_ACTION'
export const DO_GET_TOP_NEW_COURSE_ACTION = 'DO_GET_TOP_NEW_COURSE_ACTION'
export const SET_ADD_COURSE_ACTION = 'SET_ADD_COURSE_ACTION'
export const SET_ADD_TOP_NEW_COURSE_ACTION = 'SET_ADD_TOP_NEW_COURSE_ACTION'

const DoGetTotalNumerCoursesCourseAction = () => {
    return {
        type: DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION,
        payload: {
        }
    }
}

const DoGetTopNewCourseAction = () => {
    return {
        type: DO_GET_TOP_NEW_COURSE_ACTION,
        payload: {

        }
    }
}

const SetAddCourseAction = (courses) => {
    return {
        type: SET_ADD_COURSE_ACTION,
        payload: {
            courses: courses
        }
    }
}

const SetAddTopNewCourseAction = (courseIds) => {
    return {
        type: SET_ADD_TOP_NEW_COURSE_ACTION,
        payload: {
            courseIds: courseIds
        }
    }
}

const SetStatusCourseAction = (statusKey, status) => {
    return {
        type: SET_STATUS_COURSE_ACTION,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}

export {
    DoGetTotalNumerCoursesCourseAction,
    SetStatusCourseAction,
    DoGetTopNewCourseAction,
    SetAddCourseAction,
    SetAddTopNewCourseAction,
}