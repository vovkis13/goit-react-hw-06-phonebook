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

function addContact(items, { payload }) {
  const { name, number } = payload;
  const isFound = items.find(
    item => item.name.toLowerCase() === name.toLowerCase(),
  );
  if (isFound) return window.alert(`${name} is already in contacts.`);
  return [{ id: nanoid(), name: name, number: number }, ...items];
}

function deleteContact(items, { payload }) {
  return items.filter(({ id }) => id !== payload);
}

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
