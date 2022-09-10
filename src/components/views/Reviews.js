import { useState, useEffect } from 'react';
import { movieReview } from '../services/api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const pickedMovie = useParams();
  const movieId = pickedMovie.movieId;

  useEffect(() => {
    movieReview(movieId).then(movie => setReviews(movie.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {console.log(reviews)}
          {reviews.map((review, index) => {
            return (
              <li key={index}>
                <p>Author:{review.author}</p>
                <p> {review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
};
export default Reviews;
