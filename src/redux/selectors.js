export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getFilteredContacts = state =>
  state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase()),
  );
