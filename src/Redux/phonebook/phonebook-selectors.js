export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const filtered = getFilter(state);
  const contactsList = getContacts(state);

  return contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase()),
  );
};
