import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';

export const getBlogs = createAsyncThunk ( 'blogs/getBlogs', async () =>{
    let blogs = [];
    const snapshot = await getDocs(collection(db, "blogs"));
    const data =  snapshot.forEach(doc=> {
        blogs.push(doc.data()) 
    })
    
    return blogs
})



const initialState = { blogs: [] };

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  extraReducers: {
    [getBlogs.fulfilled]: (state, action)=>{
      state.blogs = action.payload
      console.log(state.blogs)
    }
  },
});


export default blogsSlice.reducer
