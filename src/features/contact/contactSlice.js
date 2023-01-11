import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const initialState = {
  uploading: false,
  contact: [],
  error: null,
};

export const writeContact = createAsyncThunk(
  'contact/writeContact',
  async (arg, thunkAPI) => {
    const docRef = await addDoc(collection(db, 'contact'), arg, {
      merge: true,
    });
    console.log(docRef);
    alert(docRef);
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    [writeContact.pending]: (state, action) => {
      state.uploading = true;
      state.error = null;
    },
    [writeContact.fulfilled]: (state, action) => {
      state.uploading = false;
      state.contact.push(action.payload);
    },
    [writeContact.rejected]: (state, action) => {
      state.uploading = false;
      state.error = action.payload;
    },
  },
});
export default contactSlice.reducer;
