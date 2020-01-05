<template>
 <v-container
  fluid
  fill-height
  class="ma-0 pa-0"
 >
    <v-layout
      align-center
      justify-center
      class="login-page"
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="cyan"
            dark
            flat
          >
            <v-toolbar-title>Snapis <v-icon class="ml-2 mb-3">fa-dog</v-icon></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <!-- <template v-slot:activator="{ on }"> -->
                <!-- <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                > -->
                  <v-icon>fa-account-group</v-icon>
                <!-- </v-btn> -->
              <!-- </template> -->
              <!-- <span>Source</span> -->
            </v-tooltip>
            <!-- <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/pMvGQO"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip> -->
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                v-model="username"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submitLogin()" color="cyan">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',
  }),
  computed: {
    getBreakPoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  methods: {
    submitLogin() {
      this.$store.dispatch('authenstore/loginUserAction', {username: this.username, password: this.password})
          .then((res) => {
            console.log('Done');
            this.$router.push('/');
          });
    },
  },
};
</script>

<style>
.login-page {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('../assets/img/japanese-spitz-login.jpg');
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: none;
}
</style>

