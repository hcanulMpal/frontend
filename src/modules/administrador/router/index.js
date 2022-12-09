export default {
    name:'ADMINISTRADOR',
    component: () => import(/* webpackChunkName: "LandingPage" */ '../layout/adminPage.vue'),
    children:
        [
            {
                path:"/nuevoUsuario",
                name:"nuevoUsuario",
                component: () => import(/* webpackChunkName: "newUser" */ '../components/Usuario/nuevoUsuario.vue'),
            },
            {
                path:"/publicaciones/EdAvisos",
                name: "avisosLa",
                component: () => import( '../components/avisosAd/avisosLa.vue')
            },
            {
                path:"/publicaciones/EdPrensa",
                name: "prensaLa",
                component: () => import( '../components/prensaAd/prensaLa.vue')
            },
            {
                path:"/palacio/EdTelefono",
                name: "telefonoLa",
                component: () => import( '../components/telefonoEm/telefonoLa.vue')
            },
            {
                path: "/palacio/EdDependencia",
                name: "dependenciaLa",
                component: () => import( '../components/dependenciaAd/dependenciaLa.vue')
            },
            {
                path: "/palacio/EdAutor",
                name: "autorLa",
                component: () => import( '../components/autorLa/autorLa.vue')
            },
            {
                path:"/autorizacion",
                name:"authoriza",
                component: () => import(/* webpackChunkName: "Autoriza Publicaciones" */ '../components/authorization/authoriza.vue'),
            },
        ]
}