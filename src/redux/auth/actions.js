const AuthAction = {
    DoLoginAuthAction: 'DoLoginAuthAction',
    DoRegisterAuthAction: 'DoRegisterAuthAction',
    DoLogoutAuthAction: 'DoLogoutAuthAction',
    SetUserTokenAuthAction: 'SetUserTokenAuthAction',
    SetUserInfoAuthAction: 'SetUserInfoAuthAction',
    SetStatusAuthAction: 'SetStatusAuthAction',
}

export const DO_CLEAR_APPSTATE_AUTH_ACTION = 'DO_CLEAR_APPSTATE_AUTH_ACTION'

const DoLoginAuthAction = (email, password) => {
    return {
        type: AuthAction.DoLoginAuthAction,
        payload: {
            email: email,
            password: password,
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