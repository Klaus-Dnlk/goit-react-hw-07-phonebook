import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSeccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSeccess');
export const addContactError = createAction('contacts/addContactError');

export const delContactRequest = createAction('contacts/delRequest');
export const delContactSuccess = createAction('contacts/delSeccess');
export const delContactError = createAction('contacts/delError');

export const changeFilter = createAction('contacts/filter');
