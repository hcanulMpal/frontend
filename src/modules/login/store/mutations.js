
// export const myAction = ( state ) => {

// }
export const myLector = ( state, payload ) => {
    state.dialogo = payload
}

export const setAuth_Token_Key = ( state, token) => {
    state.AUTH_TOKEN_KEY = token
}

export const setAuth = ( state, auth) => {
    state.auth = auth
}

export const setLogin = (state, login) => {
    state.login = login
}

export const setRol = (state, rol) => {
    state.rol = rol
}
