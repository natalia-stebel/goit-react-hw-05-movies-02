import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieGallery from '../Gallery/MovieGallery';
import ButtonGoBack from '../GoBackButton/ButtonGoBack';
// import { Spinner } from '../Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searQuery, setSearQuery] = useState([]);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      console.log(query);
      return;
    }
    async function getMovie() {
      try {
        const searchRequest = await searchMovies(query);
        setMovies(searchRequest.results);

        if (searchRequest.length === 0) {
          return alert(':(  . Please try another name of movie.');
        }
        setSearQuery();
      } catch (error) {}
    }
    getMovie();
  }, [query]);

  const formData = query => {
    setSearchParams(query);
    const findData = query !== '' ? { query } : {};
    setSearchParams(findData);
  };

  return (
    <>
      {/* <Spinner /> */}
      <div>
        <ButtonGoBack />
        <SearchBar onSubmit={formData} value={query} />
        {searQuery && <MovieGallery movies={movies} />}
      </div>
    </>
  );
}
