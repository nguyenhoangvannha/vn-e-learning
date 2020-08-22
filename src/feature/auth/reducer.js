import { AuthAction, SET_AXIOS_CLIENT_TOKEN_AUTH_ACTION } from './actions'
import { apiClient } from '../axios-config';

function authReducer
    (authState, action) {
    switch (action.type) {
        case SET_AXIOS_CLIENT_TOKEN_AUTH_ACTION:
            // Add a request interceptor
            apiClient.interceptors.request.use(
                config => {
                    if (action.payload.token) {
                        config.headers['Authorization'] = 'Bearer ' + action.payload.token;
                    }
                    // config.headers['Content-Type'] = 'application/json';
                    return config;
                },
                error => {
                    Promise.reject(error)
                });
            return authState;
            break;
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