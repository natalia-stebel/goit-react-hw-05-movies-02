import { movieCast } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import imgErr from '../image/error.jpg';

export default function Cast() {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    movieCast(movieId).then(({ casts }) => {
      setCast(casts);
    });
  }, [movieId]);
  return (
    <>
      {casts && (
        <ul>
          {casts.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <img
                  width="150"
                  src={`${IMAGE_URL}${profile_path}`}
                  alt={name}
                />
              )}

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
