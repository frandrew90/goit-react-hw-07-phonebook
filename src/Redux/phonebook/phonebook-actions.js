// import axios from 'axios';

import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// ======================
// axios.defaults.baseURL = 'http://localhost:3000';

// const fetchContacts = () => {
//   return axios.get('/contacts').then(response => response.data);
// };

// const addContact = (name, number) => {
//   const contact = { name, number };
//   return axios.post('/contacts', contact).then(response => response.data);
// };

// const delContact = id => {
//   return axios.delete(`/contacts/${id}`);
// };

// ====================

export const addContactReqest = createAction('phonebook/addContactRequest');

export const addContactSuccess = createAction('phonebook/addContactSuccess');

export const addContactError = createAction('phonebook/addContactError');
// export const addNewContact = createAction(
//   'phonebook/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: uuidv4(),
//         name,
//         number,
//       },
//     };
//   },
// );

export const removeContactReqest = createAction(
  'phonebook/removeContactReqest',
);

export const removeContactSuccess = createAction(
  'phonebook/removeContactSuccess',
);

export const removeContactError = createAction('phonebook/removeContactError');

// export const removeContact = createAction('phonebook/removeContact');

export const getAllContactsReqest = createAction('phonebook/getContactsReqest');

export const getAllContactsSuccess = createAction(
  'phonebook/getContactsSuccess',
);

export const getAllContactsError = createAction('phonebook/getContactsError');

// export const getAllContacts = createAction('phonebook/getContacts');

export const findContact = createAction('phonebook/findContact');
