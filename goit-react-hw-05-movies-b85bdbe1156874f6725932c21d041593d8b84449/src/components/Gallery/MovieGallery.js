import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import css from './MovieGallery.module.css';

export default function MovieGallery({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.galleryList}>
        {movies &&
          movies.map(({ title, id, poster_path }) => (
            <li className={css.galleryItem} key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.movieName}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          ))}
        <Outlet />
      </ul>
    </>
  );
}
