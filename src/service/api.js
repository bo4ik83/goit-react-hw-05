import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjRmMDNjY2YwYTY1MGY1NmQyNWFiNzdlNzc2ZDQ5NSIsIm5iZiI6MTczNTg5MTA2OS4xMDA5OTk4LCJzdWIiOiI2Nzc3OTg3ZDMyMWEzYTE2NmE3NDk0ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Au8o-qnGToeBo2SDCU9e84NCfmb37TJoIgPFn4kvC7A";
const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await axiosInstance.get("/trending/movie/day");
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axiosInstance.get("/search/movie", {
    params: { query },
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return data;
};
