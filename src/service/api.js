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

/**
 * Загальна обробка помилок
 * @param {Function} requestFn - Функція-запит до API.
 */
const handleRequest = async (requestFn) => {
  try {
    return await requestFn();
  } catch (error) {
    console.error(
      "API Error:",
      error.response?.data?.status_message || error.message
    );
    throw new Error(
      error.response?.data?.status_message || "Something went wrong."
    );
  }
};

/**
 * Отримує трендові фільми за день.
 * @returns {Promise<Array>} Список трендових фільмів.
 */
export const fetchTrendingMovies = () =>
  handleRequest(() =>
    axiosInstance.get("/trending/movie/day").then((res) => res.data.results)
  );

/**
 * Пошук фільмів за запитом.
 * @param {string} query - Пошуковий запит.
 * @param {number} [page=1] - Номер сторінки.
 * @returns {Promise<Array>} Список знайдених фільмів.
 */
export const fetchMoviesByQuery = (query, page = 1) =>
  handleRequest(() =>
    axiosInstance
      .get("/search/movie", {
        params: { query, page, include_adult: false, language: "en-US" },
      })
      .then((res) => res.data.results)
  );

/**
 * Отримує деталі фільму.
 * @param {number} movieId - ID фільму.
 * @returns {Promise<Object>} Деталі фільму.
 */
export const fetchMovieDetails = (movieId) =>
  handleRequest(() =>
    axiosInstance.get(`/movie/${movieId}`).then((res) => res.data)
  );

/**
 * Отримує список акторів фільму.
 * @param {number} movieId - ID фільму.
 * @returns {Promise<Object>} Дані про акторів.
 */
export const fetchMovieCredits = (movieId) =>
  handleRequest(() =>
    axiosInstance.get(`/movie/${movieId}/credits`).then((res) => res.data)
  );

/**
 * Отримує відгуки на фільм.
 * @param {number} movieId - ID фільму.
 * @param {number} [page=1] - Номер сторінки.
 * @returns {Promise<Object>} Дані про відгуки.
 */
export const fetchMovieReviews = (movieId, page = 1) =>
  handleRequest(() =>
    axiosInstance
      .get(`/movie/${movieId}/reviews`, { params: { page } })
      .then((res) => res.data)
  );
