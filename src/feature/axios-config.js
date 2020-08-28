import axios from 'axios';

axios.defaults.baseURL = 'https://api.itedu.me/'


// axios.interceptors.response.use(response => {
//     console.log('Axios Response:', response)
//     return response
// })

export const apiClient = axios;