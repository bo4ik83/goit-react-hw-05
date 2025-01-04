import axios from "axios";

const API_KEY = "your_api_key_here";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: { query },
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};
