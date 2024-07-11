// src/slices/someSlice.js
import { createSlice } from "@reduxjs/toolkit";

const someSlice = createSlice({
  name: "some",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = someSlice.actions;
export default someSlice.reducer;
