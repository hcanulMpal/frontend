export default {
    name:'Inicio',
    component: () => import(/* webpackChunkName: "LandingPage" */ '@/views/landingPage.vue'),
    children:
        [
            {
                path:"/organigrama",
                name:"organigrama",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/organigrama/organMpal.vue'),
            },
            {
                path:"/directorioMpal",
                name:"directorio",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/directorio/directorioMpal.vue'),
            },
        ]
}