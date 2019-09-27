import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://uacademy-9f008.firebaseio.com/'
});

export default instance;