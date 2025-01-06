import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/getImageUrl";
import s from "./MovieList.module.css";

function MovieList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={s.item}>
          <Link to={`/movies/${id}`} className={s.link}>
            <img
              src={getImageUrl(poster_path)}
              alt={title || "No Title"}
              className={s.poster}
            />
            <h3 className={s.title}>{title || "Untitled Movie"}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
