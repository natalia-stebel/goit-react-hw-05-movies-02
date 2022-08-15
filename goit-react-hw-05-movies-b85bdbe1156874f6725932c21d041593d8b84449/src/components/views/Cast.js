import { movieCast, POSTER_URL } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import imgErr from '../image/error.jpg';

export default function Cast() {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function FetchCastInfo() {
      try {
        const castItem = await movieCast(movieId);
        setCast(castItem);
      } catch (error) {}
    }
    FetchCastInfo();
  }, [movieId]);

  return (
    <>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.movieId}>
              {cast.profile_path} ? (
              <img src={`${POSTER_URL}${cast.profile_path}`} alt={cast.name} />)
              :{imgErr}
              <p>{cast.name}</p>
              <p>Character: {cast.character || 'Unknown'}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
