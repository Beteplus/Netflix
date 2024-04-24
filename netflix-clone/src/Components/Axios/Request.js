const API_KEY =process.env.REACT_APP_api_key
const requests = {
  fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   fetchFantasyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
   fetchMusicMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10402`,
   fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
   fetchScienceFictionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
};


  
  export default requests;