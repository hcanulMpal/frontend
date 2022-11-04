export default {
    name:'Inicio',
    component: () => import(/* webpackChunkName: "LandingPage" */ '@/views/landingPage.vue'),
    children:
        [
            {
                path:"/inicio",
                name:"primero",
                component: () => import(/* webpackChunkName: "Presidente Municipal" */ '../components/sheetPage.vue'),
            },
        ]
}