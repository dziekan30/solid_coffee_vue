import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "https://hidden-dawn-34584.herokuapp.com/api/students" : "https://hidden-dawn-34584.herokuapp.com/api/students";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
