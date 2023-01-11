import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    contact: contactReducer,
  },
});
