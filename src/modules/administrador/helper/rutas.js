const rutasAdmin = [
    {
        action: 'mdi-shield-outline',
        title: 'Administracion',
        items:[
            {title: 'Nuevo Usuario', enlace:{name:'nuevoUsuario'}, icon:'mdi-account-plus'},
        ]
    },
    {
        action: 'mdi-newspaper',
        title: 'Publicaciones',
        items:[
            {title: 'Avisos', enlace:{name:'avisosLa'}, icon:'mdi-database'},
            {title: 'Prensa', enlace:{name:'prensaLa'}, icon:'mdi-database'},
        ]
    },
    {
        action: 'mdi-newspaper',
        title: 'Palacio',
        items:[
            {title: 'Telefonos de Emergencia', enlace:{name:'telefonoLa'}, icon:'mdi-database'},
            {title: 'Dependencia', enlace:{name:'dependenciaLa'}, icon:'mdi-database'},
            {title: 'Autor', enlace:{name:'autorLa'}, icon:'mdi-database'},
        ]
    }
];


export default rutasAdmin