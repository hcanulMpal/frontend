export default {
    name:'login',
    component: () => import(/* webpackChunkName: "LandingPage" */ '../components/loginForm.vue'),
}