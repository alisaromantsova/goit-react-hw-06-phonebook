import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsState = {
  contacts: [{ name: 'alisa', number: '67899', id: '6784' }],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            ...text,
            id: nanoid(4),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
