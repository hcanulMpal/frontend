import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true,
        },
      themes: {
        light: {
          primary: '#851F3B',
          secondary: '#512DA8',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        },
      },
    },
    icons: {
      iconfont: 'fa' || 'mdi',
    },
    lang: {
      locales: { es },
      current: 'es',
    },
  });
  