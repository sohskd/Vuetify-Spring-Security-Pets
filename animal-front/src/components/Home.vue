<template>
  <div class="home-page ma-2">
    {{ getScreenSize }}
    <!-- <v-container class="ma-0 ba-0 pa-0"> -->
      <v-row>
        <v-col md="3" xs="12" sm="12">
          <v-card class="mt-2" tile>
            <div class="purple darken-2 text-center">
              <span class="white--text">Lorem ipsum1</span>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" xs="12" sm="12">
          <v-card class="mt-2" md="3" xs="12" sm="12" tile>
            <div class="purple darken-2 text-center">
              <span class="white--text">Lorem ipsum2</span>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" xs="12" sm="12">
          <v-card class="mt-2" md="3" xs="12" sm="12" tile>
            <div class="purple darken-2 text-center">
              <span class="white--text">Lorem ipsum3</span>
            </div>
          </v-card>
        </v-col>
        <v-col md="3" xs="12" sm="12">
          <v-card class="mt-2" md="3" xs="12" sm="12" tile>
            <div class="purple darken-2 text-center">
              <span class="white--text">Lorem ipsum4</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    <!-- </v-container> -->
    <v-card class="d-flex mt-2" tile>
      <v-img v-for="(dog_src, i) in dog_images" :key="i"
        :src=dog_src.src
        class="grey lighten-2 ma-1"
        max-width="200"
        max-height="200"
        aspect-ratio="1"
        alt="unable"
        cover
      ></v-img>
      <!-- <div>HI i am a container {{dog_images}}</div> -->
    </v-card>
    <!-- <v-card class="d-flex mt-2" tile>
      <div>Welcome to Find Your Snapi! A platform for dog lovers to chat and share images of their dogs for the world to see!
      </div>
    </v-card> -->
    <v-btn class="ma-2" @click="getData()">Find me a Dog!</v-btn>
    <div class="d-flex mt-2 flat dark" tile>
      <v-row no-gutters>
        <v-col
          v-for="(dogData, i) in randomDogArr"
          :key="i"
          cols="12"
          sm="4"
        >
          <v-card class="ma-1">
            <v-img
              :src="dogData.data.message"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              aspect-ratio="1"
              alt="unable"
              cover
            >
              <!-- <v-card-title v-text="dogData.data.status"></v-card-title> -->
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
            <!-- <v-img
              :src='dogData.data.message'
              class="grey lighten-2 ma-1"
              max-width="200"
              max-height="200"
              aspect-ratio="1"
              alt="unable"
              cover
              >
            </v-img> -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dog_images: [
        {'src': require('@/assets/img/japanese_spitz.jpg')},
        {'src': require('@/assets/img/shetland_sheepdog.jpg')},
        {'src': require('@/assets/img/blackdog.jpg')},
      ],
      datas: 'i am desond',
      randomDogArr: [],
    };
  },
  methods: {
    getData() {
      console.log('hi');
      this.datas = 'i am bob';
      axios.get('https://dog.ceo/api/breeds/image/random')
          .then((res) => {
            console.log(res);
            this.randomDogArr.push(res);
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
  computed: {
    getScreenSize() {
      const {xs, sm, md, lg, xl} = this.$vuetify.breakpoint;
      return xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl' : 'nothing';
    },
  },
  created() {

  },
};
</script>

<style>
  .v-image {
    opacity: 0.7;
    transition: transform 0.5s, opacity 0.5s;
  }
  .v-image:hover {
    opacity: 1;
    transform: scale(1.05);
  }
</style>
