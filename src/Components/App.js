import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllContacts } from '../Redux/phonebook/phonebook-operations';

import ContactList from './contactList/ContactList';
import ContactForm from './contatctForm/ContactForm';
import Filter from './filter/Filter';
import s from '../Components/App.module.css';

const App = ({ contacts, getAllContacts }) => {
  useEffect(() => {
    getAllContacts();

    // eslint-disable-next-line
  }, [getAllContacts]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  getAllContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
