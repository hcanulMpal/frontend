import axios from 'axios';
import { BACKEND } from '@/globals/constans';

export const apiLogin = axios.create({
    baseURL: BACKEND,
})

apiLogin.interceptors.response.use(res => {
    return res;
}, err => {
    if(!err.response){
        err.response = {
            data: "Error de conexión con el servidor"
        }
    }
    return Promise.reject(err);
})