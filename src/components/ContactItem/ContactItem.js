import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import Notiflix from 'notiflix';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
    Notiflix.Notify.info(`Contact was deleted`);
  };
  return (
    <li className={css.contactItem}>
      <p className={css.name}>{name}</p>
      <p className={css.name}>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        X
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
