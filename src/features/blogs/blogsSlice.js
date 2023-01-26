import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
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
export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id, thunkAPI) => {
    const { dispatch } = thunkAPI;
    await deleteDoc(doc(db, 'blogs', id));
    dispatch(getBlogs());
  }
);

const initialState = { 
loading: true,
blogs: [],
error: '',

};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      state.error = '';
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.blogs = [];
    });
  },
});

  
export default blogsSlice.reducer;
export const loadingState = (state) => state.blogs.loading;

