const rutasUser = [
    {
        action: 'mdi-shield-outline',
        title: 'Avisos',
        items:[
            {title: 'Crear Aviso', enlace:{name:'crearAvisos'}, icon:'mdi-account-plus'},
        ]
    },
    {
        action: 'mdi-newspaper',
        title: 'Publicaciones',
        items:[
            {title: 'Crear Noticia Prensa', enlace:{name:'crearPublicaciones'}, icon:'mdi-twitch'},
        ]
    },
    {
        action: 'mdi-image',
        title: 'Galería de Imagenes',
        items:[
            {title: 'Subir Imagen', enlace:{name:'agregarImgs'}, icon:'mdi-camera-burst'},
        ]
    },
    {
        action: 'mdi-phone',
        title: 'Crear Tel. Emergencia',
        items:[
            {title: 'Crear Telefono', enlace:{name:'creartelEmergencia'}, icon:'mdi-phone-plus'},
        ]
    },
];


export default rutasUser