import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  addContactReqest,
  addContactSuccess,
  addContactError,
  removeContactReqest,
  removeContactSuccess,
  removeContactError,
  getAllContactsReqest,
  getAllContactsSuccess,
  getAllContactsError,
  resetError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const addNewContact = (name, number) => dispatch => {
  const contact = { name, number, id: uuidv4() };

  dispatch(addContactReqest());

  axios
    .post('/contacts', contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => {
      dispatch(resetError());
      dispatch(addContactError(error));
    });
};

export const removeContact = id => dispatch => {
  dispatch(removeContactReqest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => {
      dispatch(resetError());
      dispatch(removeContactError(error));
    });
};

export const getAllContacts = () => dispatch => {
  dispatch(getAllContactsReqest());

  axios
    .get('/contacts')
    .then(response => dispatch(getAllContactsSuccess(response.data)))
    .catch(error => {
      dispatch(resetError());
      dispatch(getAllContactsError(error));
    });
};
