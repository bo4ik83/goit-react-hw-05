import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const API_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjRmMDNjY2YwYTY1MGY1NmQyNWFiNzdlNzc2ZDQ5NSIsIm5iZiI6MTczNTg5MTA2OS4xMDA5OTk4LCJzdWIiOiI2Nzc3OTg3ZDMyMWEzYTE2NmE3NDk0ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Au8o-qnGToeBo2SDCU9e84NCfmb37TJoIgPFn4kvC7A`;

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: API_TOKEN,
    },
});

export const searchMovies = async (query) => {
    const response = await instance.get("/search/movie", {
    params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
    },    
    });
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data;
};

export const fetchMovieCredits = async (movieId) => {
    const response = await instance.get(`/movie/${movieId}/credits`);
    return response.data.results;
};

instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("API Error:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
  