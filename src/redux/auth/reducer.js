import { AuthAction } from './actions'

const DoLoginAuthAction = AuthAction.DoLoginAuthAction

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

        case AuthAction.SetLoginStatusAuthAction:
            return {
                ...authState,
                status: {
                    ...authState.status,
                    DoLoginAuthAction: action.payload.status
                }
            }
        default:
            return authState;
    }
}

export { authReducer }