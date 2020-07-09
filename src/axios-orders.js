import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5cd0c.firebaseio.com/'
});

export default instance;