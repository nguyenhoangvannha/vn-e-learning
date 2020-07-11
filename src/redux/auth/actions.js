const AuthAction = {
    DO_LOGIN_AUTH_ACTION: 'DO_LOGIN_AUTH_ACTION',
    DO_REGISTER_AUTH_ACTION: 'DO_REGISTER_AUTH_ACTION'
}

const DoLoginAuthAction = (username, password) => {
    return {
        type: AuthAction.DO_LOGIN_AUTH_ACTION,
        payload: {
            username: username,
            password: password,
        }
    }
}

export { AuthAction, DoLoginAuthAction }