import { movieCast, POSTER_URL } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import imgErr from '../image/error.jpg';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieCast(movieId).then(response => setCast(response.cast));
  }, [movieId]);

  return (
    <>
      {console.log(cast)}
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={POSTER_URL + item.profile_path}
              alt={item.name}
              width="100"
              height="150"
            />

            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
