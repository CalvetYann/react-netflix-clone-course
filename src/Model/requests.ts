const API_KEY = process.env.REACT_APP_API_KEY;
const language = "fr-FR";

export const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=${language}`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213&language=${language}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${language}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${language}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${language}`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${language}`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=${language}`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=${language}`,
};

export const tvRequests = {
    fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=${language}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${language}`,
    fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=${language}`,
    fetchAnimations: `/discover/tv?api_key=${API_KEY}&with_genres=16&language=${language}`,
    fetchComedyShows: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=${language}`,
    fetchSciFiShows: `/discover/tv?api_key=${API_KEY}&with_genres=10765&language=${language}`,
    fetchRomanceShows: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=${language}`,
    fetchKidShows: `/discover/tv?api_key=${API_KEY}&with_genres=10762&language=${language}`,
}
