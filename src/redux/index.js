// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./slices/slices"; // Chỗ này bạn cần thay bằng reducer của bạn

// Cấu hình Redux Persist
const persistConfig = {
  key: "happy_farm/user",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Redux Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
