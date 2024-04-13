import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.contacts.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
