import { useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          headers: { Authorization: 'Bearer YOUR_API_TOKEN' },
        }
      )
      .then((response) => setMovies(response.data.results));
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSearch} className={s.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className={s.input}
        />
        <button type="submit" className={s.button}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;