import Vue from 'vue';
import App from './app.vue';
import router from './route';
import store from './vuex/store';
import 'mint-ui/lib/style.css';
import './utils/axios';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
