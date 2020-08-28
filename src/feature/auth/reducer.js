import { AuthAction, SET_AXIOS_CLIENT_TOKEN_AUTH_ACTION } from './actions'
import { apiClient } from '../axios-config';

function authReducer
    (authState, action) {
    switch (action.type) {
        case SET_AXIOS_CLIENT_TOKEN_AUTH_ACTION:
            // Add a request interceptor
            apiClient.interceptors.request.use(
                config => {
                    console.log('Axios Starting Request', config)
                    if (action.payload.token) {
                        config.headers['Authorization'] = 'Bearer ' + action.payload.token;
                    }
                    //config.headers['Content-Type'] = 'application/json';
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
            break;
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
            break;
        default:
            return authState;
    }
}

export { authReducer }