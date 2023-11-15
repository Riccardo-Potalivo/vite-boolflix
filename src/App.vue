<template>
  <header>
    <NavbarComponent/>
  </header>

</template>

<script>
  import { store } from './data/store.js';
  import axios from 'axios';
  import NavbarComponent from './components/NavbarComponent.vue';

  export default {
    name: 'App',

    components: {
      NavbarComponent
    },

    data() {
      return {
        store
      }
    },

    methods: {
      getMovies() {
        axios.get(this.store.apiUrl, {params: this.store.params}).then((res) => {
          console.log(res.data)
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