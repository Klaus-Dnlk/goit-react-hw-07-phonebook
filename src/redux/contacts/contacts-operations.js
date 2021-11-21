import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/delContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export default {
  fetchContacts,
  addNewContact,
  deleteContact,
};
