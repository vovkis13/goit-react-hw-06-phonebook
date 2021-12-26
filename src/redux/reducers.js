import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { nanoid } from 'nanoid';
export const contactsReducer = createReducer([], {
  [actions.addContact]: addContact,

  [actions.deleteContact]: (state, { payload }) => {
    payload.preventDefault();
    state.filter(({ id }) => id !== payload.target.value);
  },
});

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload.target.value,
});

function addContact(contacts, { payload }) {
  const { name, number } = payload;
  const isFound = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );
  if (isFound) return window.alert(`${name} is already in contacts.`);
  return [{ id: nanoid(), name: name, number: number }, ...contacts];
}
