import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import Login from '../pages/Login';
import MessagePage from '../components/chats/MessagePage';

import store from '../store/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        console.log(store.getters['authenstore/isAuthenticated']);
        if (store.getters['authenstore/isAuthenticated'] || localStorage.getItem('token')) {
          // next('/login');
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/messaging',
      name: 'message',
      component: MessagePage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
