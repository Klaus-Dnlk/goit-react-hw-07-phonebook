import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addNewContact = text => dispatch => {
  const contact = {
    text,
    completed: false,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(delContactSuccess(contactId)))
    .catch(error => dispatch(delContactError(error)));
};

export default {
  fetchContacts,
  addNewContact,
  deleteContact,
};
