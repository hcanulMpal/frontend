import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueTheMask from 'vue-the-mask'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from "vue2-google-maps"; //Añadido por Alma

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
  },
});


Vue.use(VueTheMask)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
