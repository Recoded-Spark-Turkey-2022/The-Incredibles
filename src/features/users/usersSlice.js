import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import {
  auth,
  googleProvider,
  faceBookProvider,
} from '../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const creatGoogleUser = createAsyncThunk(
  'users/creatGoogleUser',
  async () => {
    const signIn = await signInWithPopup(auth, googleProvider);
    const user = doc(db, 'users', signIn.user.uid);
    setDoc(user, { id: signIn.user.uid, email: signIn.user.email });
  }
);
export const creatFacebookUser = createAsyncThunk(
  'users/creatFacebookUser',
  async () => {
    const signIn = await signInWithPopup(auth, faceBookProvider);
    const user = doc(db, 'users', signIn.user.uid);
    setDoc(user, { id: signIn.user.uid, email: signIn.user.email });
  }
);

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [creatGoogleUser.pending]: (state, action) => {},
    [creatGoogleUser.fulfilled]: (state, action) => {},
    [creatGoogleUser.rejected]: (state, action) => {},
  },
});

export default usersSlice.reducer;
