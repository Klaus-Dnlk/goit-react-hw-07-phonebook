import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import operations from './contacts-operations';

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addNewContact.fulfilled]: (state, { payload }) =>
    state.find(e => e.name.toLowerCase() === payload.name.toLowerCase())
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [operations.fetchContacts.pending]: () => true,
  [operations.fetchContacts.fulfilled]: () => false,
  [operations.fetchContacts.rejected]: () => false,
  [operations.addNewContact.pending]: () => true,
  [operations.addNewContact.fulfilled]: () => false,
  [operations.addNewContact.rejected]: () => false,
  [operations.deletelContact.pending]: () => true,
  [operations.deletelContact.fulfilled]: () => false,
  [operations.deletelContact.rejected]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
