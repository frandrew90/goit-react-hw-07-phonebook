// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phonebookReducer from './phonebook/phonebook-reducers';

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// ===================TOOLKIT==============================

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import phonebookReducer from './phonebook/phonebook-reducers';

// const middleware = [...getDefaultMiddleware(), logger];
const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: { contacts: phonebookReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
