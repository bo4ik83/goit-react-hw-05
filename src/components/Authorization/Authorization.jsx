import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../service/api";
import s from "./Authorization.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then((data) => setMovies(data))
      .catch((err) => {
        console.error("Error fetching trending movies:", err);
        setError("Failed to load movies. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Trending Movies</h1>
      {loading && <p className={s.loading}>Loading...</p>}
      {error && <p className={s.error}>{error}</p>}
      <div className={s.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={s.movieItem}>
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
