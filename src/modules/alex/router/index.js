export default {
    name:'Inicio',
    component: () => import(/* webpackChunkName: "LandingPage" */ '@/views/landingPage.vue'),
    children:
        [
            {
                path:"salaPrensa/Avisos",
                name:"avisosSalaP",
                component: ()=> import(/* webpackChunkName: "Sala de Prensa" */ '../components/salaPrensa/avisosSalaP.vue')
            },
            {
                path: "salaPrensa/Prensa",
                name:"prensaSalaP",
                component: ()=> import(/* webpackChunkName: "Sala de Prensa" */ '../components/salaPrensa/prensaSalaP.vue')
            },
            {
                path: "presidencia",
                name: "presidentaPre",
                component: ()=> import(/* webpackChunkName: "Presidencia" */ '../components/presidencia/presidentaPre.vue')
            },
            

        ]
}