import axios from 'axios';

const Instance=axios.create({
    baseURL:'https://react-my-burger-38619.firebaseio.com/'
})



export default Instance;