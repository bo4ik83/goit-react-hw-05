import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams(); // Отримання ID фільму з URL
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchMovieReviews(movieId)
      .then((data) => setReviews(data.results || []))
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Reviews</h2>
      {loading && <p className={s.loading}>Loading reviews...</p>}
      {error && <p className={s.error}>{error}</p>}
      {reviews.length === 0 && !loading && !error && (
        <p className={s.noReviews}>No reviews available for this movie.</p>
      )}
      <ul className={s.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={s.reviewItem}>
            <h3 className={s.author}>Author: {review.author}</h3>
            <p className={s.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
