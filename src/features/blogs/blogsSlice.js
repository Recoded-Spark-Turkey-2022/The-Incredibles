import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, doc, increment, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {

  const snapshot = await getDocs(collection(db, 'blogs'));
  
  const data = snapshot.docs.map((doc) => {
   
   return {data:doc.data(),id:doc.id };
  });
  
  

  return data;
});
export const addLikes = createAsyncThunk('blogs/addLikes', async (data,thunkAPI) =>{
  const {dispatch} = thunkAPI
  const {id,state} = data
  const docRef = doc(db,'blogs',id)
  if(state){
  const decrement = await updateDoc(docRef,{likes:increment(-1)})
  dispatch(getBlogs())
  localStorage.clear()
  }
  else{
  const incrementing = await updateDoc(docRef,{likes:increment(1)})
  dispatch(getBlogs())
  localStorage.setItem("isLiked",true)
  }
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
