const rutasSAdmin = [
    {
        action: 'mdi-shield-outline',
        title: 'Administracion',
        items:[
            {title: 'Nuevo Usuario', enlace:{name:'newUser'}, icon:'mdi-account-plus'},
            {title: "Asignar Coordinador", enlace: {name: 'asingManager'}, icon: 'mdi-account-key' },
            {title: "Grupo Cambio Promotor", enlace: {name: 'changePromoter'}, icon: 'mdi-account-switch' },
        ]
    },
    {
        action: 'mdi-cash-usd',
        title: 'Creditos',
        items:[
            {title: 'Autorizar Creditos', enlace:{name:'authorization'}, icon:'mdi-credit-card'},
            {title: "Rep. Accionistas", enlace: {name: 'repaccion'}, icon: 'mdi-briefcase' },
            {title: "Cancelar Creditos", enlace: {name: 'cancelarAutho'}, icon: 'mdi-alert-circle' },
        ]
    },
    {
        action: 'mdi-account-star',
        title: 'Nomina',
        items:[
            {title: 'Nuevo Colaborador', enlace:{name:'nuevoEmpleado'}, icon:'mdi-account-multiple-plus'},
            {title: 'Lista Colaboradores', enlace:{name:'ListaEmpleados'}, icon:'mdi-account-plus'},
            {title: 'Captura Asistencia', enlace:{name:'CapturaAsist'}, icon:'mdi-watch-import'},
            {title: 'Sueldos y Bonos', enlace:{name:'sueldosBonos'}, icon: 'mdi-minecraft'}
        ]
    },
    {
        action: 'mdi-apple',
        title: 'SuperUser',
        items:[
            {title: 'Migracion BD', enlace:{name:'migrate'}, icon:'mdi-database'},
        ]
    },
];


export default rutasSAdmin