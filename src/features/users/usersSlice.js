import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const creatUser = createAsyncThunk(
  'user/creatUser',
  async (provider) => {
    const signIn = await signInWithPopup(auth, provider);
    const users = doc(db, 'users', signIn.user.uid);
    setDoc(
      users,
      { id: signIn.user.uid, email: signIn.user.email },
      { merge: true }
    );
    return signIn.user.uid;
  }
);

export const userData = createAsyncThunk(
  'user/userData',
  async (data, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const users = doc(db, 'users', data.id);
    await setDoc(users, data, { merge: true });
    dispatch(getUser(data.id));
  }
);
export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
});

const initialState = { user: {} };

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const selectUser = (state) => state.user;

export default usersSlice.reducer;
