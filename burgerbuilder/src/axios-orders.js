import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-38619.firebaseio.com/'
});

export default instance;