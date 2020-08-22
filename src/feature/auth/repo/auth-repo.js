import { apiClient } from "../../axios-config";

const login = (email, password) => {
    return apiClient.post('user/login', {
        "email": email,
        "password": password
    });
}

const register = (email, username, phone, password) => {
    return apiClient.post('user/register', {
        "email": email,
        "password": password,
        "username": username,
        "phone": phone
    });
}

const AuthRepo = {
    login: login,
    register: register,
}

export { AuthRepo }