
import App from './App.vue'
import Vue from 'vue'
import store from './store/modules/tasks';

new Vue({
  render: h => h(App),
  store
}).$mount('#app')