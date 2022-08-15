import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { movieDetails } from '../services/api';
// import Cast from './Cast';
// import { Reviews } from './Reviews';
// import { lazy } from 'react';

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
        <>
          <ButtonGoBack />
          <div>
            <img
              src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
              alt={movie.title}
            />
            <div>
              <p>{movie.title}</p>
              <span>User score: {movie.vote_average * 10}%</span>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map(genre => <p key={genre.id}> {genre.name} </p>)}

              <div>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <Link to="cast" state={{ from: location.state?.from }}>
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link to="reviews" state={{ from: location.state?.from }}>
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Suspense>
              <Outlet />
            </Suspense>
            <ToastContainer />
          </div>
        </>
      )}
    </>
  );
}
