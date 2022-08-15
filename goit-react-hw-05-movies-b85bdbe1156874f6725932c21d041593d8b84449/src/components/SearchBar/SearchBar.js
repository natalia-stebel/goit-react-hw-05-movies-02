import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const searchValue = searchQuery.get('query') ?? '';

  const handleInputChange = e => {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery({ query: e.currentTarget.value.toLowerCase() });
    console.log(searchQuery);
    console.log(searchValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        value={searchValue}
        name="query"
        onChange={handleInputChange}
        type="text"
      />
      <button className={css.button} type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
