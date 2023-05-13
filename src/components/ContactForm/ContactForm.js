import * as yup from 'yup';

import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';
// hinport
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(9).required(),
});
export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const [initialValues] = useState({
    name: '',
    number: '',
  });
  const handlerSubmit = (values, { resetForm }) => {
    const result = contacts.find(item => item.name === values.name);
    if (result) {
      alert(`${values.name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(values));

      resetForm();
    }
  };

  return (
    <div className={css.contactform}>
      <h2>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="tel">Number</label>
          <Field
            id="tel"
            type="number"
            name="number"
            placeholder="Your phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
