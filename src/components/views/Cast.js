import { movieCast, POSTER_URL } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import imgErr from '../image/error.jpg';
import css from './styles.module.css';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieCast(movieId).then(response => setCast(response.cast));
  }, [movieId]);

  return (
    <>
      {console.log(cast)}
      <ul className={css.castList}>
        {cast.map(item => (
          <li className={css.castCard} key={item.id}>
            <img
              src={
                item.profile_path === null
                  ? 'https://via.placeholder.com/200x300'
                  : POSTER_URL + item.profile_path
              }
              alt={item.name}
              width="180"
              height="250"
            />

            <p className={css.castName}>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
