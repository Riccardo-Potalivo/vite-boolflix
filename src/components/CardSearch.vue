<template>
    <div class="box">
        <div class="box-inner">
            <div class="box-front">
                <img
                    :src="getPost"
                    :alt="originalTitle"
                >
            </div>
            <div class="box-back">
                <div>
                    <p>
                        <strong>Titolo:</strong>
                         {{ title }}
                    </p>
                    <p>
                        <strong>Titolo originale:</strong>
                        {{ originalTitle }}
                    </p>
                    <img
                        :src="(imgError) ? 'https://flagsapi.com/IT/flat/64.png' : getFlag"
                        @error="languageNotFound()"
                        :alt="originalTitle"
                    >
                    <div>
                        <i
                            v-for="star in 5"
                            :key="star"
                            class="fa-star p-1"
                            :class="(star <= getVote) ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                </div>

                <div class="overview_poster">
                    <p class="mt-3">{{ overview }}</p>
                </div>
        
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'CardSearch',

        props: {
            title: String,
            originalTitle: String,
            originalLanguage: String,
            vote: Number,
            posterPath: String,
            overview: String

        },

        data() { 
            return {
                imgError: false
                
            }
        },
        
        methods: {
            languageNotFound() {
                this.imgError = true;
            }
            
        },
        
        computed: {
            getVote() {
                return Math.ceil(this.vote / 2)
            },

            getPost() {
                if(this.posterPath === null) {
                    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
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
    
    img {
        width: 3rem;
        margin-bottom: 0.5rem;
    }
}
.box-front {
    background-color: #cccccc;
    color: #111111;
    
    img {
        width: 100%;
    }
}
.box-back {
  padding: 2rem;
  background-color: #55555580;
  color: #eeeeee;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}

.overview_poster {
    height: 100%;
    overflow-y: auto;
}

</style>