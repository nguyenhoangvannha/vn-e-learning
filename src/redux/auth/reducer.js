import { AuthAction } from './actions'
function authReducer
    (authState, action) {
    switch (action.type) {
        case AuthAction.DO_LOGIN_AUTH_ACTION:
            break;
        case AuthAction.DO_REGISTER_AUTH_ACTION:
            break;
        default:
            break;
    }
}

export { authReducer }