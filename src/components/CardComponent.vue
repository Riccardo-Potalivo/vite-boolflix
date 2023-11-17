<template>
    <div class="box">
        <div class="box-inner">
            <div class="box-front">
                <img
                    :src="getPost"
                    @error="posterNotFound()"
                    :alt="originalTitle">
            </div>
            <div class="box-back">
                <p>{{ title }}</p>
                <p>{{ originalTitle }}</p>
                <img
                    class="img_flag"
                    :src="getFlag"
                    @error="languageNotFound()"
                    :alt="originalTitle">
                <p>{{ getVote }} </p>
                <div>
                    <i
                        v-for="star in 5"
                        :key="star"
                        class="fa-star"
                        :class="(star <= getVote) ? 'fa-solid' : 'fa-regular'"></i>
                </div>
        
            </div>
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
            getVote() {
                return Math.ceil(this.vote / 2)
            },

            getPost() {
                return 'http://image.tmdb.org/t/p/w342/' + this.posterPath
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

                return 'https://flagsapi.com/' + language + '/flat/64.png'
            }
        }

    }

</script>

<style lang="scss" scoped>
.box {
  background-color: transparent;
  width: 432px;
  height: 613px;
//   border: 1px solid #eeeeee;
  perspective: 1000px;
}
.box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.box:hover .box-inner {
  transform: rotateY(180deg);
}
.box-front,
.box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.box-front {
  background-color: #cccccc;
  color: #111111;
  
    img {
        width: 100%;
    }
}
.box-back {
  background-color: #55555580;
  color: #eeeeee;
  transform: rotateY(180deg);
}
.img_flag {
    width: 3rem;
}

</style>