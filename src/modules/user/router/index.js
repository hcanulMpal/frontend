export default {
    name:'USER',
    component: () => import(/* webpackChunkName: "LandingPage" */ '../layout/adminPage.vue'),
    children:
        [
            {
                path:"/crearAvisos",
                name:"crearAvisos",
                component: () => import(/* webpackChunkName: "newUser" */ '../components/avisos/crearAvisos.vue'),
            },
            {
                path:"/crearPublicaciones",
                name:"crearPublicaciones",
                component: () => import(/* webpackChunkName: "Autoriza Publicaciones" */ '../components/publicaciones/crearPublicaciones.vue'),
            },
            {
                path:"/agregarImgs",
                name:"agregarImgs",
                component: () => import(/* webpackChunkName: "Autoriza Publicaciones" */ '../components/galeriaImgs/agregarImg.vue'),
            },
            {
                path:"/creartelEmergencia",
                name:"creartelEmergencia",
                component: () => import(/* webpackChunkName: "Autoriza Publicaciones" */ '../components/telEmergencia/creartelEmergencia.vue'),
            },
        
        ]
}