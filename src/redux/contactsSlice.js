import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { deleteContact } from "./contactsOps";
import { fetchContacts } from "./contactsOps";
import { addContacts } from "./contactsOps";

const contactsInitialState = [
  { id: 0, name: "John Doe", number: "0501112233" },
  { id: 1, name: "Jane Smith", number: "0973322114" },
  { id: 2, name: "Mary Johnson", number: "0445566778" },
  { id: 3, name: "Robert Brown", number: "0679876543" },
  { id: 4, name: "Emily Davis", number: "0931122334" },
];
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
//   reducers: {
//     addContact(state, action) {
//       const newContact = {
//         id: nanoid(),
//         ...action.payload,
//       };
//       state.items.push(newContact);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;
