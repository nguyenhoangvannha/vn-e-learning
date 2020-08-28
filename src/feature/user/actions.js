export const DO_ADD_FAVOURITE_COURSE_USER_ACTION = 'DO_ADD_FAVOURITE_USER_ACTION'
export const SET_STATUS_USER_ACTION = 'SET_STATUS_USER_ACTION'
export const DO_UPDATE_BASIC_PROFILE_USER_ACTION = 'DO_UPDATE_BASIC_PROFILE_USER_ACTION'
export const DO_CHANGE_PASSWORD_USER_ACTION = 'DO_CHANGE_PASSWORD_USER_ACTION'

export const DoChangePasswordUserAction = (userId, oldPassword, newPassword) => {
    return {
        type: DO_CHANGE_PASSWORD_USER_ACTION,
        payload: {
            userId: userId,
            oldPassword: oldPassword,
            newPassword: newPassword,
        }
    }
}

export const DoUpdateBasicProfileUserAction = (username, phone, avatar) => {
    return {
        type: DO_UPDATE_BASIC_PROFILE_USER_ACTION,
        payload: {
            username: username,
            phone: phone,
            avatar: avatar,
        }
    }
}

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
