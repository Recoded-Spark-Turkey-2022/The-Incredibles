import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import contactReducer from '../features/contact/contactSlice';
import blogsReducer from '../features/blogs/blogsSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    blogs: blogsReducer,
    contact: contactReducer,
    blogs: blogsReducer,
  },
});
