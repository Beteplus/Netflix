const API_KEY =process.env.REACT_APP_api_key
const request = {
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
fetchCommedyMovies:`/discover/movie?api_key=${API_KEY}&with_geners=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_geners=10479`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_geners=99`,
fetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-Us&page=1`,
}