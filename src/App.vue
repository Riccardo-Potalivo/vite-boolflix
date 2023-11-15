<template>
  <header>
    <NavbarComponent/>
  </header>

</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  export default {
    components: {
      NavbarComponent
    }
    
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

header {
  background-color: $BgDark;
}

</style>