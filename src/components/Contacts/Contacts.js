import css from './Contacts.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

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
  return (
    <div className={css.container}>
      <Link to={link} onClick={linkToggle}>
        Filter
      </Link>

      <Outlet />
      <h2>Contacts</h2>
      <ul className={css.list}>
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
    </div>
  );
};
