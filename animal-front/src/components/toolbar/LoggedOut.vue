<template>
  <v-app-bar
      app
      clipped-left
      color="#006064"
      dense
    >
      <!-- <v-app-bar-nav-icon @click.stop="this.toggleDrawerLayoutAction || this.getDrawer" /> -->
      <v-app-bar-nav-icon @click.stop="this.toggleDrawerLayoutAction" />
      <v-toolbar-title class="mr-12 align-center">
        <span class="title"><v-icon class="mr-3">mdi-paw</v-icon>Share Your Snapi<v-icon class="ml-3 mb-1">fa-bone</v-icon></span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-text-field
          label="Search"
          prepend-icon="fas fa-search"
          style="max-width: 200px"
          class="mt-2">
        </v-text-field>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn small class="ml-4 py-4" text dense @click="onClickLogin">Log In {{this.getDrawer}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
// import {createNamespacedHelpers} from 'vuex';
// const {mapState} = createNamespacedHelpers('layout');
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState('layout', ['drawerLayout']),
    ...mapState('test', ['drawerTest']),
    ...mapGetters('layout', ['getDrawer']),
    ...mapActions('layout', ['toggleDrawerLayoutAction']),
  },
  methods: {
    onClickLogin() {
      console.log('> onClickLogin');
      console.log(this.drawerLayout);
      console.log(this.drawerTest);
      console.log(this.getDrawer);
      this.toggleDrawerLayoutAction;
    },
  },
};
</script>
