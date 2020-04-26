import axios from 'axios'


const  instance = axios.create({
    baseURL:'https://react-my-burger-7878b.firebaseio.com/'
})

export default instance;