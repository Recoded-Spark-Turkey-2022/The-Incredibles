import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import contactReducer from '../features/contact/contactSlice';
import chatReducer from '../features/chat/chatSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    contact: contactReducer,
    blogs: blogsReducer,
    chat: chatReducer,
  },
});
