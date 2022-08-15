import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';
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
    setQuery(request);
  };

  return (
    <>
      {/* <Spinner /> */}
      <div>
        <ButtonGoBack />
        <SearchBar onSubmit={onClick} value={query} />
        {movies && <MovieGallery movies={movies} />}
        <ToastContainer autoClose={2000} />;
      </div>
    </>
  );
}
