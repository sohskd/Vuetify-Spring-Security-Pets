import Vue from 'vue';
import App from './App.vue';

import vuetify from './plugins/vuetify';
import router from './plugins/router';
import store from './store/store';
import axios from 'axios';

import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(VueTextareaAutosize);

const configOpts = {
  apiKey: 'AIzaSyATGZ-L04ZMTGAg6EVSKxrHMnn2WS7CtwE',
  authDomain: 'vue-calendar-fdc31.firebaseapp.com',
  databaseURL: 'https://vue-calendar-fdc31.firebaseio.com',
  projectId: 'vue-calendar-fdc31',
  storageBucket: 'vue-calendar-fdc31.appspot.com',
  messagingSenderId: '516145040737',
  appId: '1:516145040737:web:fcd5cb6532f53182cdc920',
};

firebase.initializeApp(configOpts);

export const db = firebase.firestore();

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  beforeCreate: () => {
    console.log('hi');
  },
}).$mount('#app');
