import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList.jsx";
import { fetchTrendingMovies } from "../service/api";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return <MovieList movies={movies} />;
}

export default HomePage;
