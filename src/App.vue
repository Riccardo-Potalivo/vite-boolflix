<template>
  <header>
    <NavbarComponent/>
  </header>
  <MainComponent/>

</template>

<script>
  import { store } from './data/store.js';
  import axios from 'axios';
  import NavbarComponent from './components/NavbarComponent.vue';
  import MainComponent from './components/MainComponent.vue';

  export default {
    name: 'App',

    components: {
      NavbarComponent,
      MainComponent
    },

    data() {
      return {
        store
      }
    },

    methods: {
      getMovies() {
        axios.get(this.store.apiUrl, {params: this.store.params}).then((res) => {
          console.log(res.data);
          store.movieList = res.data
          console.log(store.movieList);

        })
      }
    },

    created() {
      this.getMovies()

    }
    
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

header {
  background-color: $BgDark;
}

</style>