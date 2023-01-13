import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { db, storage } from '../../firebase/firebase';
import { getDocs, addDoc, collection, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { v4 } from 'uuid';

//I had to carry WriteBlog functions here for them to be global and I needed userID
//as a note, I have not make function for the date and likes in WriteBlog, cuz its related with blogs pages
//for blogs pages, recommended filter data use for blogs; date, likes, userID

//Fetch POST blogs to firebase
export const blogsData = createAsyncThunk(
  'blogs/blogsData',
  //Data for blogs contain in firebase and here, we are defining it
  async (data, thunkAPI) => {
    const { mediaURL, blogsFormData } = data;
    const { title, subTitle, content, likes, date, userID } = blogsFormData;
    const { dispatch } = thunkAPI;
    //function to store images in firebase storage
    if (mediaURL) {
      const imageRef = ref(storage, `BlogImages/${media.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, media);
      const mediaurl = await getDownloadURL(snapshot.ref);
      //function to send data to firebase
      async () => {
          const url = await uploadImg();
          await addDoc(collection(db, 'blogs'), {
            title: title,
            subTitle: subTitle,
            content: content,
            mediaURL: url,
            likes: 0,
            date: '',
            userID: userID,
          });
          alert('Blog submitted successfully');
          dispatch(getBlogs(userID))
      }
    }
  }
);


//Fetch GET blogs coming from firebase
export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  const colRef = collection(db, 'blogs');
  const q = query(
    colRef,
    where('userID', '==', 'hPQTyjT8TaaG26EkILSgvNKjJhe2')
  );
  const querySnapshot = await getDocs(q);
  const renderBlogs = querySnapshot.docs.map((doc) => ({data: doc.data(), id: doc.id}))
  // .forEach((doc) => {
  //   console.log(doc.data())
  //    doc.data();
  // });
  // .map((doc) => ({ ...doc.data(), id:doc.id }));
  return renderBlogs
});

const initialState = {
  loading: false,
  blogs: {blogs:{}},
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
      state.blogs = {blogs:{}};
      state.error = action.error.message;
    });
  },
});

export const selectBlog = (state) => state.blogs.blogs;

export default blogsSlice.reducer;
