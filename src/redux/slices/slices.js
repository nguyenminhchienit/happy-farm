// src/slices/index.js
import { combineReducers } from "@reduxjs/toolkit";
// Import các slice reducers của bạn ở đây
import someSlice from "./someSlice";

const rootReducer = combineReducers({
  some: someSlice,
  // Thêm các reducers khác nếu có
});

export default rootReducer;
