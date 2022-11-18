export default {
    name:'SUPERADMIN',
    component: () => import(/* webpackChunkName: "LandingPage" */ '../layout/adminPage.vue'),
    children:
        [
            {
                path:"/newuser",
                name:"newUser",
                component: () => import(/* webpackChunkName: "newUser" */ '../components/newuser/newUser.vue'),
            },
            {
                path:"/autorizacion",
                name:"authoriza",
                component: () => import(/* webpackChunkName: "Autoriza Publicaciones" */ '../components/authorization/authoriza.vue'),
            },
        ]
}