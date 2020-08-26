import { SET_STATUS_USER_ACTION } from './actions'

function userReducer
    (userState, action) {
    switch (action.type) {
        case SET_STATUS_USER_ACTION:

            const statusKey = action.payload.statusKey;

            const status = {
                ...userState.status,
            }

            status[statusKey] = action.payload.status


            return {
                ...userState,
                status: status
            }
        default:
            return userState;
    }
}

export { userReducer }