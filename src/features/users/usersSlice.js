import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { signInWithPopup } from 'firebase/auth';
import { auth, db, storage } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const creatUser = createAsyncThunk(
  'user/creatUser',
  async (provider, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const signIn = await signInWithPopup(auth, provider);
    const users = doc(db, 'users', signIn.user.uid);
    localStorage.setItem('loggedIn', true);
    await setDoc(
      users,
      {
        id: signIn.user.uid,
        email: signIn.user.email,
        authPhoto: signIn.user.photoURL,
        displayName: signIn.user.displayName,
      },
      { merge: true }
    );
    const userChats = doc(db, 'userChats', signIn.user.uid);
    await setDoc(userChats, {}, { merge: true });
    dispatch(getUser(signIn.user.uid));
    return signIn.user.uid;
  }
);

export const userData = createAsyncThunk(
  'user/userData',
  async (data, thunkAPI) => {
    const { profilImg, formData } = data;
    const { username, usersurname, biography, location, id } = formData;
    const { dispatch } = thunkAPI;
    if (profilImg) {
      const imageRef = ref(storage, `usersImages/${profilImg.name + id}`);
      const snapshot = await uploadBytes(imageRef, profilImg);
      const photoURL = await getDownloadURL(imageRef);
      const users = doc(db, 'users', id);
      await setDoc(
        users,
        { photoURL, username, usersurname, biography, location, id },
        { merge: true }
      );
      dispatch(getUser(id));
    } else {
      const users = doc(db, 'users', id);
      await setDoc(
        users,
        { username, usersurname, biography, location, id },
        { merge: true }
      );
      dispatch(getUser(id));
    }
  }
);
export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
});

const initialState = {
  user: {},
};

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
export const selectUserLoggedIn = (state) => state.user.isLoggedIn;

export default usersSlice.reducer;
