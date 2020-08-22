export const DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION = 'GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION'
export const SET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION = 'SET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION'
export const SET_STATUS_INSTRUCTOR_ACTION = 'SET_STATUS_INSTRUCTOR_ACTION'

export const DoGetAllInstructor = () => {
    return {
        type: DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION,
        payload: {
        }
    }
}

export const SetAllInstructor = (instructors) => {
    return {
        type: SET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION,
        payload: {
            instructors: instructors,
        }
    }
}

export const SetStatusInstructor = (statusKey, status) => {
    return {
        type: SET_STATUS_INSTRUCTOR_ACTION,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}

