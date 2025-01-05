import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: { Authorization: 'Bearer YOUR_API_TOKEN' },
      })
      .then((response) => setCast(response.data.cast));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={s.item}>
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;