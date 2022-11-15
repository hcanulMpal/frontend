export default {
    name:'Inicio',
    component: () => import(/* webpackChunkName: "LandingPage" */ '@/views/landingPage.vue'),
    children:
        [
            {
                path:"/nMunicipio/historiaMpal",
                name:"historiaMpal",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/nMunicipio/historiaMpal.vue'),
            },
            {
                path:"/nMunicipio/ubicacionMpal",
                name:"ubicacionMpal",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/nMunicipio/ubicacionMpal.vue'),
            },
            {
                path:"/nMunicipio/telEmergencia",
                name:"telEmergencia",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/nMunicipio/telEmergencia.vue'),
            },
            {
                path:"/nMunicipio/escudoMpal",
                name:"escudoMpal",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/nMunicipio/escudoMpal.vue'),
            },
            {
                path:"/nMunicipio/turismoMpal",
                name:"turismoMpal",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/nMunicipio/turismoMpal.vue'),
            },
            {
                path:"/nMunicipio/fiestasFerias",
                name:"fiestasFerias",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/nMunicipio/fiestasFerias.vue'),
            },

        ]
}