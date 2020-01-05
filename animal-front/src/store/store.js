import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import test from './modules/test';
import authenstore from './modules/authenstore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    layout,
    test,
    authenstore,
  },
});

export default store;
