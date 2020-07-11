import axios from 'axios';

const login = async (email, password) => {
    return axios.post('https://api.itedu.me/user/login', {
        "email": email,
        "password": password
    });
}

const AuthRepo = {
    login: login,
}

export { AuthRepo }