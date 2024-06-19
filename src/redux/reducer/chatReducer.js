import { createReducer } from "@reduxjs/toolkit";

export const chatReducer = createReducer({users: []},{
    searchChatRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      searchChatSuccess: (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      },
      searchChatFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      accessChatRequest: (state) => {
        state.loading = true;
        // state.error = null;/
      },
      accessChatSuccess: (state, action) => {

        state.loading = false;
        state.error = null;
        state.chatData = action.payload;
      },
      accessChatFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    
    fetchChatRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchChatSuccess: (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      },
      fetchChatFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    fetchMsgRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchMsgSuccess: (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = null;
        state.Messages = action.payload;
      },
      fetchMsgFail: (state, action) => {
        console.log(state);
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload;
      },
    sendMsgRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      sendMsgSuccess: (state, action) => {
        console.log(action)
        state.loading = false;
        state.error = null;
        state.sendMsg = action.payload;
      },
      sendMsgFail: (state, action) => {
        console.log(state)
        state.loading = false;
        state.error = action.payload;
      },
  
})