<template>
  <header>
    <NavbarComponent @filter-change="setValue"/>
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

      setValue(search) {
        console.log(search)
        this.store.params.query = search;

        this.getMovies();
        this.getSeries();
      },

      getMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.movies, {params: this.store.params}).then((res) => {
          console.log(res.data);
          store.moviesList = res.data
          console.log(store.moviesList);

        })
      },

      getSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.series, {params: this.store.params}).then((res) => {
          console.log(res.data);
          store.seriesList = res.data
          console.log(store.seriesList);

        })
      },
    },

    created() {
      this.getMovies();
      this.getSeries();

    },

    
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

header {
  background-color: $BgDark;
}

</style>