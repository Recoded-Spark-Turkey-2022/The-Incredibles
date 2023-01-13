import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { db, storage } from '../../firebase/firebase';
import { getDocs, addDoc, collection, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { v4 } from 'uuid';

//CHITURCA still works on this part, please do not change it and related data
//Fetch GET blogs coming from firebase
export const getBlogs = createAsyncThunk('blogs/getBlogs', async (blogData) => {
  const colRef = collection(db, 'blogs');
  const q = query(
    colRef,
    where('userID', '==', 'hPQTyjT8TaaG26EkILSgvNKjJhe2')
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data())
    // console.log(blogData);
    return;
  });
});

const initialState = {
  loading: false,
  blogs: [],
  error: '',
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message;
    });
  },
});

export const selectBlog = (state) => state.blogs;

export default blogsSlice.reducer;
