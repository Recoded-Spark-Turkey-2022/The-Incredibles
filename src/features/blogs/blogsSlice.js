import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { db, storage } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//Fetch POST blog form data to firebase
// export const postBlogs = createAsyncThunk(
//     'blogs/postBlogs',
//     async (data, thunkAPI) => {
//       const { media, blogFormData } = data;
//       const { userID, content, subtitle, title, date, likes } = blogFormData;
//       const { dispatch } = thunkAPI;
//       if (media) {
//         const imageRef = ref(storage, `BlogImages/${media.name + userID}`);
//         const snapshot = await uploadBytes(imageRef, media);
//         const mediaURL = await getDownloadURL(imageRef);
//         const blogs = doc(db, 'blogs', userID);
//         await setDoc(
//           blogs,
//           { mediaURL, userID, content, subtitle, title, date, likes },
//           { merge: false }
//         );
//         dispatch(getBlogs(userID));
//       }
//       const blogs = doc(db, 'blogs', userID);
//       await setDoc(
//         blogs,
//         { mediaURL, userID, content, subtitle, title, date, likes },
//         { merge: false }
//       );
//       dispatch(getBlogs(userID));
//     }
//   );

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
