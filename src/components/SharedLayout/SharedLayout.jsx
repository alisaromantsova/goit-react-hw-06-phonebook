import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.all}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link className={css.logo} to="/contacts">
            PhoneBook
          </Link>
          <NavLink className={css.home} to="/">
            <p className={css.plus}>+</p>
          </NavLink>
          <NavLink className={css.list} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
};
