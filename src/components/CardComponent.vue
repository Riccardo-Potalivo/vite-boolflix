<template>
    <div class="col-3 g-3">
        <div class="card p-3 text-center ">
            <p>{{ title }}</p>
            <p>{{ originalTitle }}</p>

            <img 
                class="img_flag"
                :src="getFlag"
                @error="languageNotFound()"
                :alt="originalTitle">

            <p>{{ vote.toFixed(0) }}</p>
            
            <img 
                :src="getPost" 
                @error="posterNotFound()" 
                :alt="originalTitle">
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
            vote: Number,
            posterPath: String
        },

        data() { 
            return {
                currentFlag: '',
                
            }
        },
    
        methods: {
            languageNotFound() {
                this.language = 'GB';
            },

            posterNotFound() {
                this.poster = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
            },
        },

        computed: {

            getPost() {
                return 'http://image.tmdb.org/t/p/w500/' + this.posterPath
            }, 

            getFlag() {
                let language = this.originalLanguage.toUpperCase();

                switch(language) {
                    case 'EN':
                    language = 'GB'
                    break

                    case 'JA':
                    language = 'JP'
                    break

                    case 'HI':
                    language = 'IN'
                    break
                }
                console.log(language)

                return 'https://flagsapi.com/' + language + '/flat/64.png'
            }
        }

    }

</script>

<style lang="scss" scoped>

.img_flag {
    width: 3rem;
}

</style>