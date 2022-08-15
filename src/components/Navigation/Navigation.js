import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) =>
        css.link + (isActive ? ` ${css.active}` : '')
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={({ isActive }) =>
        css.link + (isActive ? ` ${css.active}` : '')
      }
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
