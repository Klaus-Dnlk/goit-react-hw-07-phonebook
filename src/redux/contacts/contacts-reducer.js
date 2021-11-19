import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

const items = createReducer(
  [],

  {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) =>
      state.find(e => e.name.toLowerCase() === payload.name.toLowerCase())
        ? alert(`${payload.name} is already in contacts`)
        : [...state, payload],
    [delContactSuccess]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
);

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [delContactRequest]: () => true,
  [delContactSuccess]: () => false,
  [delContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
