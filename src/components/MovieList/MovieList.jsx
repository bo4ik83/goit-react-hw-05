import PropTypes from "prop-types";
import { getImageUrl } from "../../utils/getImageUrl";
import s from "./MovieList.module.css";

function MovieList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={s.item}>
          <img
            src={getImageUrl(poster_path)}
            alt={title}
            className={s.poster}
          />
          <h3 className={s.title}>{title}</h3>
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
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
