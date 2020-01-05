<template>
  <v-container>
    <v-row>
      <v-col md="2">
        <v-card
          max-width="500"
          class="mx-auto"
        >
          <v-list subheader>
            <v-subheader>Recent chat</v-subheader>
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">mdi-paw</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col md="8">
        <p>hi</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
      {active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
      {title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      {title: 'Shumei', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {title: 'Desmond', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      {title: 'Bobby', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      {title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      {title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      {title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
    ],
    items2: [
      {title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'},
    ],
  }),
};
</script>

<style>

</style>
