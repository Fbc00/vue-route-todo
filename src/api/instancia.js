import axios from 'axios';
import url from '@/settings'
const instanciaAxios = axios.create({ 
    baseURL: url.apiBaseUrl,
})

export default instanciaAxios;