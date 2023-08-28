import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=012df55dd5a1c36d9914c9c76b0294e5&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;