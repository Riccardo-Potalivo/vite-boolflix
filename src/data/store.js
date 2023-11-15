import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/movie/550",

  params: {
    api_key: "342ffcfe86be516cbf41126aa7519e81",
    query: "",
  },
});
