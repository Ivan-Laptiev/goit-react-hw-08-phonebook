import { NavLink } from 'react-router-dom';
import css from "./AuthNav.module.css";

export const AuthNav = () => {
	return (
		<nav>
			<NavLink className={css.authLinc} to="/register">Sign Up</NavLink>
			<NavLink className={css.authLinc} to="/login">Log in</NavLink>
		</nav>
	);
};

export default AuthNav;