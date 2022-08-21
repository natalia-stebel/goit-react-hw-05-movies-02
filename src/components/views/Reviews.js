import { useState, useEffect } from 'react';
import { movieReview } from '../services/api';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieReview(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul>
            {console.log(reviews)}
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p> {content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
}
