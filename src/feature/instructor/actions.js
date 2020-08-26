export const DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION = 'GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION'
export const SET_ADD_INSTRUCTOR_INSTRUCTOR_ACTION = 'SET_ADD_INSTRUCTOR_INSTRUCTOR_ACTION'
export const SET_STATUS_INSTRUCTOR_ACTION = 'SET_STATUS_INSTRUCTOR_ACTION'
export const DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION = 'DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION'

export const DoGetAllInstructor = () => {
    return {
        type: DO_GET_ALL_INSTRUCTOR_INSTRUCTOR_ACTION,
        payload: {
        }
    }
}

export const DoGetInstructorDetail = (instructorId) => {
    return {
        type: DO_GET_INSTRUCTOR_DETAIL_INSTRUCTOR_ACTION,
        payload: {
            instructorId: instructorId
        }
    }
}

export const SetAddInstructor = (instructors) => {
    return {
        type: SET_ADD_INSTRUCTOR_INSTRUCTOR_ACTION,
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

