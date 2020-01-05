export default {
  namespaced: true,
  state: {
    drawerLayout: null,
  },
  mutations: {
    toggleDrawerLayout: (state) => {
      state.drawerLayout = !state.drawerLayout;
    },
  },
  actions: {
    toggleDrawerLayoutAction: ({commit}) => {
      commit('toggleDrawerLayout');
    },
  },
  getters: {
    getDrawer: (state) => state.drawerLayout,
  },
};
