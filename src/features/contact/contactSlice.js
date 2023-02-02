import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';

const initialState = {
  uploading: false,
  contact: [],
  error: null,
};

export const writeContact = createAsyncThunk(
  'contact/writeContact',
  async (arg) => {
    await setDoc(
      doc(db, 'contactMessages', arg.email),
      { messages: arrayUnion(arg.message) },
      { merge: true }
    );
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    [writeContact.pending]: (state) => {
      state.uploading = true;
    },
    [writeContact.fulfilled]: (state) => {
      state.uploading = false;
      alert('Your message submitted successfully');
    },
    [writeContact.rejected]: (state) => {
      state.uploading = false;
    },
  },
});
export default contactSlice.reducer;
