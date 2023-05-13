import React from 'react';

import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <Contacts />
    </>
  );
};

export default App;
