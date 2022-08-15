import { useState, useEffect } from 'react';
import * as movieAPI from '../services/api';
// import PageHeading from 'components/PageHeading/PageHeading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieGallery from '../Gallery/MovieGallery';
import { Status } from './status';
import css from './styles.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    setStatus(Status.PENDING);
    movieAPI
      .fetchTrendingFilms()
      .then(data => {
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setStatus(Status.REJECTED);
      });
  }, []);
  if (status === Status.IDLE) {
    return;
  }
  if (status === Status.PENDING) {
    return;
  }

  if (status === Status.RESOLVED) {
    return (
      <div>
        <h2 className={css.titleHome}>Trending today</h2>

        {movies && <MovieGallery movies={movies} />}
      </div>
    );
  }

  if (status === status.REJECTED) {
    return toast.error(':( Try again', {
      position: 'top-center',
    });
  }
  <ToastContainer autoClose={2000} />;
}
