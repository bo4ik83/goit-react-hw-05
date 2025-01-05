import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={s.item}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
