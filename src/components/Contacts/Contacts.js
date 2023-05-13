import css from './Contacts.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const value = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  return (
    <div className={css.container}>
      <h2>Contacts</h2>
      <ul className={css.list}>
        {value
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => {
            console.log(item);
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
