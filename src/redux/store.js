import { configureStore } from "@reduxjs/toolkit";
// import { searchUser } from "./actions/search";
import { userReducer } from "./reducer/userReducer";
import { searchReducer } from "./reducer/searchReducer";
import { adminReducer } from "./reducer/adminReducer";
import {chatReducer} from "./reducer/chatReducer";
import {categoryReducer} from './reducer/categoryReducer'

export const server = "https://wallclockzone.onrender.com/api/v1";
// export const server = "localhost:2000/api/v1";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  reducer: {
    user: userReducer,
    search: searchReducer,
    admin: adminReducer,
    chat: chatReducer,
    category: categoryReducer
  },
  
});

export default store;
