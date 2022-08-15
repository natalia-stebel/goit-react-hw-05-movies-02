import { Link, useLocation } from 'react-router-dom';
import css from './ButtonGoBack.module.css';

export default function ButtonGoBack() {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/'}>
      <button className={css.buttonGoBack} type="button">
        Go back
      </button>
    </Link>
  );
}
