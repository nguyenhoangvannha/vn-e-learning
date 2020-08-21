export const DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION = 'DO_GET_TOTAL_NUMER_COURSES_COURSE_ACTION'
export const SET_STATUS_COURSE_ACTION = 'SET_STATUS_COURSE_ACTION'
export const DO_GET_TOP_NEW_COURSE_ACTION = 'DO_GET_TOP_NEW_COURSE_ACTION'
export const DO_GET_TOP_SELL_COURSE_ACTION = 'DO_GET_TOP_SELL_COURSE_ACTION'
export const DO_GET_TOP_RATE_COURSE_ACTION = 'DO_GET_TOP_RATE_COURSE_ACTION'
export const SET_ADD_COURSE_ACTION = 'SET_ADD_COURSE_ACTION'
export const SET_ADD_TOP_NEW_COURSE_ACTION = 'SET_ADD_TOP_NEW_COURSE_ACTION'
export const SET_ADD_TOP_SELL_COURSE_ACTION = 'SET_ADD_TOP_SELL_COURSE_ACTION'
export const SET_ADD_TOP_RATE_COURSE_ACTION = 'SET_ADD_TOP_RATE_COURSE_ACTION'

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

const DoGetTopSellCourseAction = () => {
    return {
        type: DO_GET_TOP_SELL_COURSE_ACTION,
        payload: {

        }
    }
}

const DoGetTopRateCourseAction = () => {
    return {
        type: DO_GET_TOP_RATE_COURSE_ACTION,
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

const SetAddTopSellCourseAction = (courseIds) => {
    return {
        type: SET_ADD_TOP_SELL_COURSE_ACTION,
        payload: {
            courseIds: courseIds
        }
    }
}

const SetAddTopRateCourseAction = (courseIds) => {
    return {
        type: SET_ADD_TOP_RATE_COURSE_ACTION,
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
    DoGetTopSellCourseAction,
    SetAddTopSellCourseAction,
    DoGetTopRateCourseAction,
    SetAddTopRateCourseAction,
}