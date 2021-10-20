import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // addContactReqest,
  addContactSuccess,
  // addContactError,
  // removeContactReqest,
  removeContactSuccess,
  // removeContactError,
  // getAllContactsReqest,
  getAllContactsSuccess,
  // getAllContactsError,
  findContact,
} from './phonebook-actions';

const items = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [getAllContactsSuccess]: (_, action) => action.payload,
  [removeContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [findContact]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
