// redux/store.js - Performance optimized, same functionality
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./slices";
import loanReducer from "./slices";

// Keep your existing thunk import for compatibility
import thunk from "redux-thunk";

const reducers = combineReducers({
  user_data: userReducer,
  loan: loanReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // 🚀 ONLY Performance additions - no functional changes
  version: 1,
  throttle: 1000, // Throttle localStorage writes for performance
};

const persistReducerConfig = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistReducerConfig,
  devTools: process.env.NODE_ENV !== "production",

  // 🔧 Enhanced middleware setup (keeps thunk, adds optimizations)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Handle redux-persist actions (prevents console warnings)
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(thunk), // Keep your existing thunk middleware
});
