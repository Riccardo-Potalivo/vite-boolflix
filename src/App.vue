<template>
  <header>
    <NavbarComponent @filter-change="setValue"/>
  </header>
  <main>
    <MainComponent/>
  </main>

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

      setValue() {
        this.getMovies();
        this.getSeries();
        this.getSeriesPopular();
      },

      getMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.moviesSearch, {params: this.store.params}).then((res) => {
          // console.log(res.data);
          store.moviesList = res.data
          console.log(store.moviesList.results);

        })
      },

      getSeries() {
        axios.get(this.store.apiUrl + this.store.endPoint.seriesSearch, {params: this.store.params}).then((res) => {
          // console.log(res.data);
          store.seriesList = res.data
          console.log(store.seriesList.results);

        })
      },

      getSeriesPopular() {
        axios.get(this.store.apiUrl + this.store.endPoint.seriesPopular, {params: this.store.params}).then((res) => {
          // console.log(res.data);
          store.seriesListPopular = res.data
          console.log(store.seriesListPopular.results);

        })
      },
    },

    created() {
      this.getMovies();
      this.getSeries();
      this.getSeriesPopular();

    },

    
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

header,
main {
  background-color: $BgDark;
}

</style>