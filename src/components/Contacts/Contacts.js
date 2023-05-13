import css from './Contacts.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Contacts = () => {
  const value = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const [isOpen, setOpen] = useState(false);
  const [link, setLink] = useState('/contact');

  const linkToggle = () => {
    console.log(link);
    if (!isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (!isOpen) {
      setLink('/contacts/filter');
    } else {
      setLink('/contacts');
    }
  }, [isOpen]);
  console.log(value);
  return (
    <div className={css.container}>
      <Link className={css.filter} to={link} onClick={linkToggle}>
        <svg
          className={css.svg}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <title>filter</title>
          <path d="M12 12l8-8v-4h-20v4l8 8v8l4-4v-4z"></path>
        </svg>
      </Link>

      <Outlet />
      <h2 className={css.title}>Contacts</h2>
      {value.length > 0 && (
        <ul className={css.list}>
          <li className={css.header}>
            <p className={css.point}>Name</p>
            <p className={css.point}>Number</p>
          </li>
          {value
            .filter(item =>
              item.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(item => {
              return (
                <ContactItem
                  key={item.id}
                  name={item.name}
                  number={item.number}
                  id={item.id}
                />
              );
            })}
        </ul>
      )}
      {value.length === 0 && (
        <Link className={css.notfound} to="/">
          Add your first contact
        </Link>
      )}
    </div>
  );
};
