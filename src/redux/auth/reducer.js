import { AuthAction } from './actions'

function authReducer
    (authState, action) {
    switch (action.type) {
        case AuthAction.SetUserTokenAuthAction:
            return {
                ...authState,
                token: action.payload.token,
            }
            break;
        case AuthAction.SetUserInfoAuthAction:
            return {
                ...authState,
                userInfo: action.payload.userInfo,
            }

        case AuthAction.SetStatusAuthAction:

            const statusKey = action.payload.statusKey;

            const status = {
                ...authState.status,
            }

            status[statusKey] = action.payload.status


            return {
                ...authState,
                status: status
            }
        default:
            return authState;
    }
}

export { authReducer }