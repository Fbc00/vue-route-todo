import axios from 'axios';
const instanciaAxios = axios.create({ 
    baseURL: "http://localhost:3000"
})

export default instanciaAxios;