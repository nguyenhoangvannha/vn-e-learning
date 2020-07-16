import { apiClient } from "../axios-config";

const login = (email, password) => {
    return apiClient.post('user/login', {
        "email": email,
        "password": password
    });
}

const AuthRepo = {
    login: login,
}

export { AuthRepo }