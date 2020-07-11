import axios from 'axios';

const login = async (username, password) => {
   return axios.post('https://api.itedu.me/user/login', {
    "email": "nguyenhoangvannha@gmail.com",
    "password": "nha.nguyen"
   });
}

const AuthRepo = {
    login: login,
}

export { AuthRepo }