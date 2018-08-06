import Vue from 'vue'
import App from './components/App.vue'

import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
