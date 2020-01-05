<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      v-if="showMenu"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          @click="clickDrawerItem(item)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">FRIENDS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
      color="#006064"
      dense
      v-if="showMenu"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
        <v-btn small class="ml-4 py-4" text dense @click="onClickLogout()">Log Out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="#006064"

    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
// import Calendar from './components/Calendar.vue'
// import LoggedIn from './components/toolbar/LoggedIn.vue';
// import LoggedOut from './components/toolbar/LoggedOut.vue';

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    items: [
      {icon: 'fa-dog', text: 'Find Dogs', link: '/'},
      {icon: 'fa-account-group', text: 'Message', link: '/messaging'},
    ],
    items2: [
      {picture: 28, text: 'Joseph'},
      {picture: 38, text: 'Apple'},
      {picture: 48, text: 'Xbox Ahoy'},
      {picture: 58, text: 'Nokia'},
      {picture: 78, text: 'MKBHD'},
    ],
    snackbar: false,
    text: '',
    timeout: 0,
  }),
  components: {
    // LoggedIn,
    // LoggedOut,
  },
  methods: {
    onClickLogout() {
      console.log('> onClickLogin');
      this.$store.dispatch('authenstore/logoutUserAction')
          .then(() => {
            this.$router.push({name: 'login'});
            this.snackbar = true;
            this.text = 'Successfully Logged out';
            this.timeout = 4000;
          });
    },
    clickDrawerItem(item) {
      this.$router.push(item.link);
    },
  },
  computed: {
    showMenu() {
      return this.$route.name !== 'login' && this.$route.name !== 'register';
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
    const token = localStorage.getItem('token');
    console.log('Created App.vue');
    console.log(token);
    if (token) {
      this.setToken(token);
      next();
    }
  },
};
</script>

<style lang="css">

</style>
