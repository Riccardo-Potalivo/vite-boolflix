<template>
    <div class="container">

        <h3>Movies</h3>
        <div class="row">
            <CardComponent 
                v-for="(movie, index) in store.moviesList.results" 
                :key="index"
                :title="movie.title"
                :originalTitle="movie.original_title"
                :originalLanguage="movie.original_language"
                :vote="movie.vote_average"
                :posterPath="movie.poster_path"
                :overview="movie.overview"/>
        </div>

        <h3>Series</h3>
        <div class="row">
            <CardComponent 
                v-for="(series, index) in store.seriesList.results" 
                :key="index"
                :title="series.name"
                :originalTitle="series.original_name"
                :originalLanguage="series.original_language"
                :vote="series.vote_average"
                :posterPath="series.poster_path"
                :overview="series.overview"/>
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
        }

    }
</script>

<style lang="scss" scoped>
h3 {
    color: white;
    padding: 1rem 0;
}

</style>