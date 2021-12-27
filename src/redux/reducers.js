import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { nanoid } from 'nanoid';

const contactsReducer = createReducer([], {
  [actions.addContact]: addContact,
  [actions.deleteContact]: deleteContact,
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

function addContact(contacts, { payload }) {
  const { name, number } = payload;
  const isFound = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );
  if (isFound) return window.alert(`${name} is already in contacts.`);
  return [{ id: nanoid(), name: name, number: number }, ...contacts];
}

function deleteContact(contacts, { payload }) {
  return contacts.filter(({ id }) => id !== payload);
}

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
