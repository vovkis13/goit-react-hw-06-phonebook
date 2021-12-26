export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getFilteredContcts = state =>
  state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase()),
  );
