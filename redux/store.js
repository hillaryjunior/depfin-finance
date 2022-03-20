import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./slices";
import loanReducer from "./slices";

import thunk from "redux-thunk";

const reducers = combineReducers({
  user_data: userReducer,
  loan: loanReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistReducerConfig = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistReducerConfig,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
