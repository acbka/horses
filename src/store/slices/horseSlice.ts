import { createSlice } from "@reduxjs/toolkit";
import { getHorseById } from "../requests/getHorseById";
import { addHorse } from "../requests/addHorse";
import { updateHorse } from "../requests/updateHorse";

const initialState = {
  isLoading: false,
  horse: {},
};

const horseSlice = createSlice({
  name: "horse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHorseById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getHorseById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
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
