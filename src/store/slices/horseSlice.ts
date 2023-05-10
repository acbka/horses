import { createSlice } from "@reduxjs/toolkit";
import { getHorseById } from "../requests/getHorseById";
import { addHorse } from "../requests/addHorse";
import { updateHorse } from "../requests/updateHorse";
import { HorseIdInterface } from "../../common/types";

type InitialHorseStateType = {
  horse: HorseIdInterface;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

const initialState: InitialHorseStateType = {
  horse: {} as HorseIdInterface,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const horseSlice = createSlice({
  name: "horse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHorseById.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getHorseById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.horse = payload;
    });
    builder.addCase(getHorseById.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(addHorse.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(addHorse.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.horse = payload as HorseIdInterface;
    });
    builder.addCase(addHorse.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(updateHorse.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(updateHorse.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.horse = payload;
    });
    builder.addCase(updateHorse.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export default horseSlice.reducer;
