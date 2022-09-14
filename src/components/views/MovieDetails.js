import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom';
import { movieDetails } from '../services/api';
// import Cast from './Cast';
// import { Reviews } from './Reviews';
// import { lazy } from 'react';
import css from './styles.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonGoBack from './../GoBackButton/ButtonGoBack';

// const Cast = lazy(() =>
//   import('./Cast').then(module => ({ default: module.Cast }))
// );
// const Reviews = lazy(() =>
//   import('./Reviews').then(module => ({ default: module.Reviews }))
// );

export default function MovieCard() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    async function getMovie() {
      try {
        const movieItem = await movieDetails(movieId);
        setMovie(movieItem);
      } catch (error) {
        toast.error('Ooops:( There is no movie with tais name');
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      {movie && (
        <section className={css.moviesSection}>
          <ButtonGoBack to={goBack} />
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : 'https://via.placeholder.com/300x450'
              }
              alt={movie.title}
              className={css.moviePoster}
            />
            <div>
              <p className={css.movieTitle}>{movie.title}</p>
              <p className={css.movieScore}>
                User score: {movie.vote_average * 10}%
              </p>

              <h2 className={css.movieOverview}>Overview</h2>
              <div className={css.movieOverviewCont}>
                <p className={css.movieOverviewText}>{movie.overview}</p>
              </div>

              <h3 className={css.movieOverview}>Genres</h3>
              <ul className={css.movieGenres}>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <li className={css.listGenre} key={genre.id}>
                      {' '}
                      {genre.name}{' '}
                    </li>
                  ))}
              </ul>

              <div>
                <h2 className={css.movieOverview}>Additional information</h2>
                <ul>
                  <li>
                    <NavLink
                      className={css.link}
                      to="cast"
                      state={{ from: location.state }}
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li className={css.link}>
                    <NavLink
                      to="reviews"
                      state={{ from: location.state }}
                      className={css.link}
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <Suspense>
              <Outlet />
            </Suspense>
            <ToastContainer />
          </div>
        </section>
      )}
    </>
  );
}
