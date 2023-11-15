<template>
    <div class="col-3 g-3">
        <div class="card p-3 text-center ">
            <p>{{ title }}</p>
            <p>{{ originalTitle }}</p>
            <img :src="`/public/image/${originalLanguage}.png`">
                <!-- :alt="originalLanguage"
                v-if="isLoaded" @load="onImgLoad"> -->
            <!-- <p>{{ originalLanguage }}</p> -->
            <p>{{ vote.toFixed(0) }}</p>
        </div>
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