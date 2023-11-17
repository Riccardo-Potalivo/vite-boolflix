<template>
    <div class="col-3 g-3">
        <div class="card p-3 text-center ">
            <p>{{ title }}</p>
            <p>{{ originalTitle }}</p>

            <img :src="currentFlag"
                 @error="toDefSrc()"
                 :alt="originalTitle">
                 
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

        data() {
            return {
                currentFlag: 'https://flagsapi.com/' + this.originalLanguage.toUpperCase() + '/flat/64.png'
            }
        },
    
        methods: {
        toDefSrc() {
                this.currentFlag = 'https://flagsapi.com/' + 'GB' + '/flat/64.png';
            }
        },

    }

</script>

<style lang="scss" scoped>

img {
    width: 3rem;
}

</style>