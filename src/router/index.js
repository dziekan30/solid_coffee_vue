import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Show from '../views/Show.vue';
import About from '../views/About.vue';


Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home },
  {path: '/about', name: 'about', component: About},
  {path: '/show', name: 'show', component: Show}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
