<template>
    <div>
        <img
            :src="getPost"
            :alt="originalTitle"
        >
    </div>
</template>

<script>
    export default {
        name: 'CardCarousel',

        props: {
            // title: String,
            originalTitle: String,
            // originalLanguage: String,
            // vote: Number,
            posterPath: String,

        },

        computed: {
            getPost() {
                if(this.posterPath === null) {
                    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
                return 'http://image.tmdb.org/t/p/w342/' + this.posterPath
            }, 

        }
        
    }
</script>

<style lang="scss" scoped>

</style>