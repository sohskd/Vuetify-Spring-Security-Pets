<template>
  <v-app-bar
      app
      clipped-left
      color="#006064"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-icon class="mx-4">fab fa-youtube</v-icon> -->
      <v-toolbar-title class="mr-12 align-center">
        <span class="title"><v-icon class="mr-3">mdi-paw</v-icon>Share Your Snapi<v-icon class="ml-3 mb-1">fa-bone</v-icon></span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-text-field
          label="Prepend"
          prepend-icon="fas fa-search"
          style="max-width: 200px"
          class="mt-2">
        </v-text-field>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-overflow-btn
          :items="dropdown_icon"
          label="Profile"
          segmented
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
};
</script>
