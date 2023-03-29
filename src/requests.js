const API_KEY = "368ada029f20db0a7a4a9cfb469ee031";
console.log(API_KEY);

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&Swith_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie7api_key=${API_KEY}&Swith_genres=28`,
  fetchComedyMovies: `/discover/movie7api_key=${API_KEY}&Swith_genres=35`,
  fetchHorrorMovies: `/discover/movie7api_key=${API_KEY}&Swith_genres=27`,
  fetchRomanceMovies: `/discover/movie7api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie7api_key=${API_KEY}&with_genres=99`,
};

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=368ada029f20db0a7a4a9cfb469ee031&language=en-US
