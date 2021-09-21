import { createSlice } from "@reduxjs/toolkit";
import { getHorseById } from "../requests/getHorseById";
import { addHorse } from "../requests/addHorse";
import { updateHorse } from "../requests/updateHorse";

const initialState = { horse: {} };
const horseSlice = createSlice({
  name: "horse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHorseById.fulfilled, (state, { payload }) => {
      state.horse = payload;
    });
    builder.addCase(addHorse.fulfilled, (state, { payload }) => {
      state.horse = payload;
    });
    builder.addCase(updateHorse.fulfilled, (state, { payload }) => {
      state.horse = payload;
    });
  },
});

export default horseSlice.reducer;
