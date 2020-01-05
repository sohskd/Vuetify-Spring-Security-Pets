import axios from 'axios';

export default {
  namespaced: true,
  state: {
    token: null,
    userDetails: {
      username: '',
      password: '',
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return state.token != null;
    },
    getUserDetails: (state) => {
      return state.userDetails;
    },
  },
  mutations: {
    loginUser(state) {
      //
      console.log('mutate loginUser');
      console.log(this.userDetails);
    },
    setUserDetails(state, payload) {
      const {username, password} = payload;
      state.username = username;
      state.password = password;
    },
    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  actions: {
    loginUserAction({commit, getters}, payload) {
      return new Promise((resolve, reject) => {
        commit('setUserDetails', payload);

        const config = {
          headers: {
          // 'Content-Type': 'application/json',
          // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          },
        };

        axios.post(
            'http://localhost:8081/api/auth/signin',
            // 'http://127.0.0.1:9998/postdata',
            payload,
            config,
        ).then((res) => {
          console.log(res);
          commit('setToken', res.data.accessToken);
          resolve(res);
        }, (error) => {
          console.log(error);
          reject(error);
        });

      // commit('loginUser');
      });
    },
    logoutUserAction({commit}) {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token'); // clear your user's token from localstorage
        resolve();
      });
    },
  },
};
