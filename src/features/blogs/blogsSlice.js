import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc 
} from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  const snapshot = await getDocs(collection(db, 'blogs'));

  const data = snapshot.docs.map((doc) => {
    return { data: doc.data(), id: doc.id };
  });

  return data;
});
export const addLikes = createAsyncThunk(
  'blogs/addLikes',
  async (data, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const userId = getState().user.user.id;
    const { id, state } = data;
    const docRef = doc(db, 'blogs', id);
    if (state) {
      const decrement = await updateDoc(docRef, {
        likedUsers: arrayRemove(userId),
      });

      dispatch(getBlogs());
    } else {
      const incrementing = await updateDoc(docRef, {
        likedUsers: arrayUnion(userId),
      });
      dispatch(getBlogs());
    }
  }
);
export const addUnlikes = createAsyncThunk(
  'blogs/addUnlikes',
  async (data, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const userId = getState().user.user.id;
    const { id, state } = data;
    const docRef = doc(db, 'blogs', id);
    if (state) {
      const decrement = await updateDoc(docRef, {
        unlikedUsers: arrayRemove(userId),
      });
      dispatch(getBlogs());
    } else {
      const incrementing = await updateDoc(docRef, {
        unlikedUsers: arrayUnion(userId),
      });
      dispatch(getBlogs());
    }
  }
);
export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async(id,thunkAPI)=>{
  const { dispatch } = thunkAPI;
  await deleteDoc(doc(db, "blogs", id));
  dispatch(getBlogs())
})

const initialState = { blogs: [] };

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: {
    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export default blogsSlice.reducer;
