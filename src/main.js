import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'

import VNavbar from './components/Navbar.vue';
import VSidebar from './components/Sidebar.vue';
import VChart from './Chart.js';

Vue.component('v-navbar', VNavbar);
Vue.component('v-sidebar', VSidebar);
Vue.component('v-chart', VChart);

Vue.use(VueResourse)

new Vue({
  el: '#app',
  render: h => h(App)
})
