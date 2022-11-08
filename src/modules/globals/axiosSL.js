import axios from 'axios';
import { BACKEND } from './constans';

export const Api = axios.create({
    baseURL: BACKEND,
})

Api.interceptors.response.use(res => {
    return res;
}, err => {
    if(!err.response){
        err.response = {
            data: "Error de conexión con el servidor"
        }
    }
    return Promise.reject(err);
})