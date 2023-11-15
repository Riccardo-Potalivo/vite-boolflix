<template>
    <div class="container">
        <div class="row gap-3">
            <CardComponent v-for="(movie, index) in store.movieList.results" :key="index"
            :title="movie.title"
            :originalTitle="movie.original_title"
            :originalLanguage="movie.original_language"
            :vote="movie.vote_average"
            />
        </div>
    </div>
</template>

<script>
    import { store } from '../data/store.js';
    import CardComponent from './CardComponent.vue'

    export default {
        name: 'MainComponent',

        components: {
            CardComponent
        },
        
        data() {
            return {
                store
            }
        },

        
    }
</script>

<style lang="scss" scoped>

</style>