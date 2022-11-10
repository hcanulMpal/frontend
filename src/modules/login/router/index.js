export default {
    name:'login',
    component: () => import(/* webpackChunkName: "loginPage" */ '../components/loginForm.vue'),
}