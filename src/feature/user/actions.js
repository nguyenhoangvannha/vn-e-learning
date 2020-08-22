export const DO_ADD_FAVOURITE_COURSE_USER_ACTION = 'DO_ADD_FAVOURITE_USER_ACTION'
export const SET_STATUS_USER_ACTION = 'SET_STATUS_USER_ACTION'

export const DoAddFavouriteCourseUserAction = (courseId) => {
    return {
        type: DO_ADD_FAVOURITE_COURSE_USER_ACTION,
        payload: {
            courseId: courseId
        }
    }
}

export const SetStatusUserAction = (statusKey, status) => {
    return {
        type: SET_STATUS_USER_ACTION,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}
