import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { users: [] },
  {
    getalluserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getalluserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    getalluserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getapproveuserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getapproveuserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    getapproveuserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteuserRequest: (state) => {
      state.loading = true;
    },
    deleteuserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteuserFail: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateuserstatusRequest: (state) => {
      state.loading = true;
    },
    updateuserstatusSuccess: (state, action) => {
      state.loading = false;
      state.approve = action.payload;
    },
    updateuserstatusFail: (state, action) => {
      state.loading = false;
      state.approve = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
