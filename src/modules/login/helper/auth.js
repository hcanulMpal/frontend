import router from '@/router/index';
import VueJwtDecode from 'vue-jwt-decode';
import Store from "@/store/index.js"

// const AUTH_TOKEN_KEY = "AUTH_TOKEN";
/* eslint-disable*/
export const getName = function(){
    const token = getToken();
    if (token){
        const decoded = VueJwtDecode.decode(token)
        return decoded.sub.nombre;
    }else{
        return 'UNKNOW'
    }
}

export const getCity = function(){
    const token = getToken();
    if (token){
        const decoded = VueJwtDecode.decode(token)
        Store.commit('loginModule/setCity', decoded.sub.ciudad)
        return decoded.sub.ciudad;
    }else{
        return 'UNKNOW'
    }
}

export const getId = function(){
    const token = getToken();
    if (token){
        const decoded = VueJwtDecode.decode(token)
        return decoded.sub.id;
    }else{
        return 'UNKNOW'
    }
}

export const getRol = function(){
    const token = getToken();
    let rol = ''
    if (token) {
        const decoded = VueJwtDecode.decode(token);
        if (decoded.sub.rol === 'admin'){
            rol = 'Administrador'
        }else{
            rol = decoded.sub.rol
        }
        Store.commit('loginModule/setRol', rol)
        return rol.toUpperCase();
    }
    else {
        return 'UNKNOW'
    }
}
 
export const setToken = function (token) {
    Store.commit('loginModule/setLogin', true)
    Store.commit('loginModule/setAuth', true);
    Store.commit('loginModule/setAuth_Token_Key', token)
}

export const getToken = function () {
    return Store.state.loginModule.AUTH_TOKEN_KEY 
}

export const logout = function () {
    Store.commit('loginModule/setLogin', false)
    Store.commit('loginModule/setAuth', false);
    Store.commit('loginModule/setAuth_Token_Key', null)
    router.push({name:'Inicio'})
}

export const isAuthenticated = function () {
    const token = getToken();
    if (token) {
        const decoded = VueJwtDecode.decode(token);
        if (decoded.sub.nombre == getName()) {
            return true;
        } else {
            logout();
            return false;
        }
    }
    return false;
}