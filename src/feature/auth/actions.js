const AuthAction = {
    DoLoginAuthAction: 'DoLoginAuthAction',
    DoLogoutAuthAction: 'DoLogoutAuthAction',
    SetUserTokenAuthAction: 'SetUserTokenAuthAction',
    SetUserInfoAuthAction: 'SetUserInfoAuthAction',
    SetStatusAuthAction: 'SetStatusAuthAction',
}

export const DO_CLEAR_APPSTATE_AUTH_ACTION = 'DO_CLEAR_APPSTATE_AUTH_ACTION'
export const DO_REGISTER_AUTH_ACTION = 'DO_REGISTER_AUTH_ACTION'
export const DO_SEND_FORGET_PASSWORD_EMAIL_AUTH_ACTION = 'DO_SEND_FORGET_PASSWORD_EMAIL_AUTH_ACTION'

export const DoSendForgetPasswordEmailAuthAction = (email) => {
    return {
        type: DO_SEND_FORGET_PASSWORD_EMAIL_AUTH_ACTION,
        payload: {
            email: email,
        }
    }
}

const DoLoginAuthAction = (email, password) => {
    return {
        type: AuthAction.DoLoginAuthAction,
        payload: {
            email: email,
            password: password,
        }
    }
}

export const DoRegisterAuthAction = (email, username, phone, password) => {
    return {
        type: DO_REGISTER_AUTH_ACTION,
        payload: {
            email: email,
            password: password,
            username: username,
            phone: phone
        }
    }
}

const SetUserTokenAuthAction = (token) => {
    return {
        type: AuthAction.SetUserTokenAuthAction,
        payload: {
            token: token,
        }
    }
}

const SetUserInfoAuthAction = (userInfo) => {
    return {
        type: AuthAction.SetUserInfoAuthAction,
        payload: {
            userInfo: userInfo,
        }
    }
}

const SetStatusAuthAction = (statusKey, status) => {
    return {
        type: AuthAction.SetStatusAuthAction,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}

const DoLogoutAuthAction = () => {
    return {
        type: AuthAction.DoLogoutAuthAction,
        payload: {

        }
    }
}

export const DoClearAppStateAuthAction = () => {
    return {
        type: DO_CLEAR_APPSTATE_AUTH_ACTION,
        payload: {

        }
    }
}

export {
    AuthAction,
    DoLoginAuthAction,
    SetUserTokenAuthAction,
    SetUserInfoAuthAction,
    SetStatusAuthAction as SetStatusAuthAction,
    DoLogoutAuthAction,
}