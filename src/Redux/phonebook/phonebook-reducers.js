// import { combineReducers } from 'redux';

// import {
//   ADD_CONTACT,
//   GET_CONTACTS,
//   REMOVE_CONTACT,
//   FIND_CONTACT,
// } from './phonebook-types';

// const items = (
//   state = [],

//   action,
// ) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case GET_CONTACTS:
//       return action.payload;
//     case REMOVE_CONTACT:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case FIND_CONTACT:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });

// ===================TOOLKIT==================================================================

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addNewContact,
  getAllContacts,
  removeContact,
  findContact,
} from './phonebook-actions';

const items = createReducer([], {
  [addNewContact]: (state, action) => [...state, action.payload],
  [getAllContacts]: (state, action) => action.payload,
  [removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [findContact]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
