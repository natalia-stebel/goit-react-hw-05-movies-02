import { useState, useEffect } from 'react';
import { movieReview } from '../services/api';

export default function getMovieReview({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieReview(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
}
