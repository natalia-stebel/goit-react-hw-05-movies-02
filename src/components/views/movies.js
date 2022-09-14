import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieGallery from '../Gallery/MovieGallery';
import ButtonGoBack from '../GoBackButton/ButtonGoBack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Spinner } from '../Loader/Loader';

export default function Movies() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const navigation = useNavigate();
  const location = useLocation();

  // const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovies(query).then(request => {
      if (!request.results.length) {
        toast.error('Ooops:( Try another name');
        return;
      }
      setMovies(request.results);
    });
  }, [query]);

  const onClick = request => {
    if (query === request) {
      return;
    }
    setQuery(request);
    navigation({ ...location, search: `?query=${request}` });

    setMovies([]);
  };

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const newRequest = new URLSearchParams(location.search).get('query');
    setQuery(newRequest);
  }, [location.search, location.pathname]);

  const goBack = '';
  return (
    <>
      {/* <Spinner /> */}
      <div>
        <ButtonGoBack />
        <SearchBar onSubmit={onClick} value={query} />
        {movies && <MovieGallery movies={movies} const goBack={goBack} />}
        <ToastContainer autoClose={2000} />;
      </div>
    </>
  );
}
