import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../Redux/phonebook/phonebook-operations';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { getVisibleContacts } from '../../Redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const findContact = useSelector(getVisibleContacts);

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
