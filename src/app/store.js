import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import contactReducer from '../features/contact/contactSlice';
import blogsReducer from '../features/blogs/blogsSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    contact: contactReducer,
    blogs: blogsReducer,
  },
});
