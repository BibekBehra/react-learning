import axios from 'axios'

const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

  
instance.defaults.headers.common['Authorization']='AUTH TOKEN from instances';
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default instance;