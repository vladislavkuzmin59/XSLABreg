import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store'
import CheckboxRadio from 'vue-checkbox-radio';
Vue.use(CheckboxRadio);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
