import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",

  endPoint: {
    moviesSearch: "search/movie",
    moviesPopular: "search/movie",
    seriesSearch: "search/tv",
    seriesPopular: "discover/tv",
  },

  params: {
    api_key: "342ffcfe86be516cbf41126aa7519e81",
    query: "",
    language: "it-IT",
    sort_by: "popularity.desc",
  },

  moviesList: [],
  moviesListPopular: [],
  seriesList: [],
  seriesListPopular: [],
});
