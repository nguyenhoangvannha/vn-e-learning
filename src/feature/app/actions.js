export const DO_CLEAR_APPSTATE_APP_ACTION = 'CLEAR_APPSTATE_APP_ACTION'
export const DO_CHANGE_LANGUAGE_APP_ACTION = 'DO_CHANGE_LANGUAGE_APP_ACTION'
export const SET_CHANGE_LANGUAGE_APP_ACTION = 'SET_CHANGE_LANGUAGE_APP_ACTION'

export const ClearAppStateAppAction = () => {
    return {
        type: DO_CLEAR_APPSTATE_APP_ACTION,
        payload: {

        }
    }
}

export const DoChangeLanguageAppAction = (language) => {
    return {
        type: DO_CHANGE_LANGUAGE_APP_ACTION,
        payload: {
            language: language
        }
    }
}

export const SetChangeLanguageAppAction = (language) => {
    return {
        type: SET_CHANGE_LANGUAGE_APP_ACTION,
        payload: {
            language: language
        }
    }
}