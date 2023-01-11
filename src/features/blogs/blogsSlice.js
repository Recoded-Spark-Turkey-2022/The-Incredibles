import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { db, storage } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//Fetch GET data coming from firebase
export const getBlogs = createAsyncThunk("blogs/getBlogs", async ()=>{
    const docRef = doc(db, "blogs", "rXHVkUlUYyVnXo9Cafzs");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
})

const initialState = {
    loading: false,
    blogs: [],
    error: "",
};

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state)=> {
            state.loading = true;
        })
        builder.addCase(getBlogs.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.blogs = action.payload
        })
        builder.addCase(getBlogs.rejected, (state, action) => {
            state.loading = false;
            state.blogs = [];
            state.error = action.error.message
        })
    },
})

export const selectBlog = (state) => state.blogs;

export default blogsSlice.reducer;
