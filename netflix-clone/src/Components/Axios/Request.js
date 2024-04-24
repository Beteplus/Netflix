const API_KEY =process.env.REACT_APP_api_key
const requests = {
  fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumenteries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
};


  
  export default requests;