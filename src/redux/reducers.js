import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { nanoid } from 'nanoid';

const contactsReducer = createReducer([], {
  [actions.addContact]: addContact,
  [actions.deleteContact]: deleteContact,
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_state, { payload }) => payload,
});

function addContact(items, { payload }) {
  const { name, number } = payload;
  const isFound = items.find(
    item => item.name.toLowerCase() === name.toLowerCase(),
  );
  if (isFound) return window.alert(`${name} is already in contacts.`);
  return [{ id: nanoid(), name, number }, ...items];
}

function deleteContact(contacts, { payload }) {
  return contacts.filter(({ id }) => id !== payload);
}

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
