import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <nav className={css.nav}>
            <Link className={css.logo} to="/">
              PhoneBook
            </Link>
            <NavLink className={css.home} to="/">
              NewContact
            </NavLink>
            <NavLink className={css.movies} to="/contacts">
              Contacts
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
