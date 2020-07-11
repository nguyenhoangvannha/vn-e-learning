const AuthAction = {
    DoLoginAuthAction: 'DoLoginAuthAction',
    DoRegisterAuthAction: 'DoRegisterAuthAction',
    SetUserTokenAuthAction: 'SetUserTokenAuthAction',
    SetUserInfoAuthAction: 'SetUserInfoAuthAction',
    SetLoginStatusAuthAction: 'SetLoginStatusAuthAction',
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

const SetLoginStatusAuthAction = (status) => {
    return {
        type: AuthAction.SetLoginStatusAuthAction,
        payload: {
            status: status,
        }
    }
}

export { AuthAction, DoLoginAuthAction, SetUserTokenAuthAction, SetUserInfoAuthAction, SetLoginStatusAuthAction }