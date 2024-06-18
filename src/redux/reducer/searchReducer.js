import { createReducer } from "@reduxjs/toolkit";

export const searchReducer = createReducer(
  { users: [] },
  {
    searchRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    searchFail: (state, action) => {
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
