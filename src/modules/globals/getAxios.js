import { Api } from "./axiosSL"

export const requestPost = async (ruta, dato) => {
    let res = null
    Api({
        method: "POST",
        url: ruta,
        data: {data:dato}
    }).then(({data}) => {
        res = data
    }).catch(error => {
        res = error.response?.status
    })
    return res
}

export const queryGET = async (ruta, dato) => {
    let res = null
    Api({
        method: "POST",
        url: [ruta, "/" ,dato].join(),
    }).then(({data}) => {
        res = data
    }).catch(error => {
        res = error.response?.status
    })
    return res
}

export const requestGET = async (ruta) => {
    let res = null
    await Api({
        method: "GET",
        url: ruta,
    }).then(({data}) => {
        res = data
    }).catch(error => {
        res = error.response?.status
    })
    return res
}

export const upDataFileGlobal = async ( files, ruta ) => {
    let res = null
    let config = {headers:{'content-type':'multipart/form-data'}}
    let formData = new FormData()
    formData.append('file', files)
    await Api({
        method: 'POST',
        url:ruta,
        data: formData,
        config:config,
    }).then(({ data }) => {
        res = data
    }).catch( error => {
        res = error.response?.status
    })
    return res
}