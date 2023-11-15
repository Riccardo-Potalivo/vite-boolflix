<template>
    <div class="col-3 card">
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <img :src="`/public/image/${originalLanguage}.png`">
            <!-- :alt="originalLanguage" 
            v-if="isLoaded" @load="onImgLoad"> -->
        <!-- <p>{{ originalLanguage }}</p> -->
        <p>{{ vote }}</p>
    </div>
</template>

<script>

    export default {
        name: 'CardComponent',

        props: {
            title: String,
            originalTitle: String,
            originalLanguage: String,
            vote: Number
        },
        data () {
            return {
                isLoaded: false
            }
        },
        
        methods: {
            onImgLoad () {
                this.isLoaded = true
            }
        }
 
    }
</script>

<style lang="scss" scoped>

img {
    width: 3rem;
}

</style>