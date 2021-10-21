import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../Redux/phonebook/phonebook-operations';
import { getContacts } from '../../Redux/phonebook/phonebook-selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contatcs = useSelector(getContacts);
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isThereContact(name)) {
      return alert(`${name} has been already in contact list`);
    }
    dispatch(addNewContact(name, number));
    reset();
  };

  const isThereContact = name =>
    contatcs.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <label className={s.contactFormName}>
        Name:
        <input
          className={s.contactFormNameInput}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.contactFormNumber}>
        Number:
        <input
          className={s.contactFormNumInput}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={s.contactFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   addNewContact: PropTypes.func.isRequired,
//   contatcs: PropTypes.array.isRequired,
// };
