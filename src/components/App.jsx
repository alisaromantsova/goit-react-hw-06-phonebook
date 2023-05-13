import React from 'react';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Filter } from './Filter/Filter';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactForm />} />
          <Route path="/contacts" element={<Contacts />}>
            <Route path="/contacts/filter" element={<Filter />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
