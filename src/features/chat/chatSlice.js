import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatId: null,
  chatUser: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getChat: (state, action) => {
      state.chatId = action.payload.id;
      state.chatUser = action.payload.data;
    },
  },
});

export const { getChat } = chatSlice.actions;
export default chatSlice.reducer;
