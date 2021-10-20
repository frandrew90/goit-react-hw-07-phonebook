import React from 'react';

import { connect } from 'react-redux';
import { removeContact } from '../../Redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import {
  getContacts,
  getFilter,
} from '../../Redux/phonebook/phonebook-selectors';

const ContactList = ({ filtered, removeContact, contactsList }) => {
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
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

const mapStateToProps = state => ({
  filtered: getFilter(state),
  contactsList: getContacts(state),
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  filtered: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
  contactsList: PropTypes.array.isRequired,
};
