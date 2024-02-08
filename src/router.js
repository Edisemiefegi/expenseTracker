// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/Home.vue'

const routes = [
  // Define your routes here
  {
    path: '/',
    component: Home,
    name: 'home',
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
