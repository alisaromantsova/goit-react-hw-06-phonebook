import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.contactItem}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
