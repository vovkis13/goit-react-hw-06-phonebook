import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
