import  axios from 'axios';
import { BACKEND } from '@/globals/constans';
import { getToken,  isAuthenticated, logout } from '@/modules/login/helper/auth';

export const backend = axios.create({
    baseURL:BACKEND,
})

backend.interceptors.request.use(function(req) {
    if(!isAuthenticated()){
        logout();
    }
    else{
        req.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return req
})

backend.interceptors.response.use(res => {
    return res;
    }, err => {
        if(err.response){
            const { status } = err.response;
            if(status === 401 || status === 422){
                logout();
            }
        } else {
            err.response = {
                data: "Error de conexión con el servidor"
            }
        }
        return Promise.reject(err)
    }
)