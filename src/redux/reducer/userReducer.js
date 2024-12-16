import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {isAuthenticated: false},
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state,action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      // state.message = action.payload.message;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutFail: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
    },

    updateprofileRequest: (state) => {
      state.loading = true;
    },
    updateprofileSuccess: (state) => {
      state.loading = false;
    },
    updateprofileFail: (state) => {
      state.loading = false;
    },

    UserProfileUpdateRequest:(state) => {
      state.loading = true;
    },
    UserProfileUpdateSuccess: (state) => {
      state.loading = false;
    },
    UserProfileUpdateFail: (state) => {
      state.loading = false;
    },

    forgetPasswordRequest: (state) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
    },

    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
    },
    resetPasswordFail: (state, action) => {
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
