import { createAction } from '@reduxjs/toolkit';

export const addContactReqest = createAction('phonebook/addContactRequest');

export const addContactSuccess = createAction('phonebook/addContactSuccess');

export const addContactError = createAction('phonebook/addContactError');

export const removeContactReqest = createAction(
  'phonebook/removeContactReqest',
);

export const removeContactSuccess = createAction(
  'phonebook/removeContactSuccess',
);

export const removeContactError = createAction('phonebook/removeContactError');

export const getAllContactsReqest = createAction('phonebook/getContactsReqest');

export const getAllContactsSuccess = createAction(
  'phonebook/getContactsSuccess',
);

export const getAllContactsError = createAction('phonebook/getContactsError');

export const findContact = createAction('phonebook/findContact');

export const resetError = createAction('phonebook/resetError');
