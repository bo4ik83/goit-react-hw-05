import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../service/api";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.name}></li>
      ))}
    </ul>
  );
}

export default MovieCast;
