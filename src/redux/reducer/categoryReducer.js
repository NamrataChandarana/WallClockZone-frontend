import { createReducer } from "@reduxjs/toolkit";

export const categoryReducer = createReducer({categories: []},{
      categoryRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      categorySuccess: (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload;
        console.log(state.categories)
      },
      categoryFail: (state, action) => {
        state.loading = false;
      }
})