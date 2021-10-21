import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../Redux/phonebook/phonebook-operations';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import {
  getContacts,
  getFilter,
} from '../../Redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const contactsList = useSelector(getContacts);
  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFindContact = (filtered, contactsList) => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase()),
    );
  };
  const findContact = onFindContact(filtered, contactsList);

  return (
    <ul>
      {findContact &&
        findContact.map(contact => {
          return (
            <li className={s.contactListItem} key={contact.id}>
              <span className={s.contactListName}>{contact.name}:</span>
              &nbsp;
              <span className={s.contactListNumber}>{contact.number}</span>
              <button
                className={s.contactListItemBtn}
                type="button"
                id={contact.id}
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   filtered: PropTypes.string.isRequired,
//   removeContact: PropTypes.func.isRequired,
//   contactsList: PropTypes.array.isRequired,
// };
