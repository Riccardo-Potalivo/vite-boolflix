<template>
    <div class="col-3 card">
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <p>{{ originalLanguage }}</p>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>