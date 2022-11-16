import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../../redux/auth/authSelectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();
  const isHomePath = location.pathname === '/';
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={css.titleLinc}>
        Home
      </NavLink>
      {isLoggedIn && isHomePath && (
        <NavLink className={css.homeLinc} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;