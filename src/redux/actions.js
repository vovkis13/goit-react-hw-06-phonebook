import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('items/Add');
export const deleteContact = createAction('items/Delete');
export const changeFilter = createAction('filter/Change');
