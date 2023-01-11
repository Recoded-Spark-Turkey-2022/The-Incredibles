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
    //merge is not workin ,,we need to add messages from the same email together
    const docRef = await addDoc(collection(db, 'contact'), arg, { merge: true });
    //need to add condition if it is fulfilled then show:
    alert('Your message submitted successfully!');
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
