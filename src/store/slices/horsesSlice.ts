import { createSlice } from "@reduxjs/toolkit";
import { getHorses } from "../requests/getHorses";
import { HorseIdInterface } from "../../common/types";
import { deleteHorse } from "../requests/deleteHorse";

type InitialHorsesStateType = {
  horses: HorseIdInterface[];
  compareHorses: HorseIdInterface[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

const initialState: InitialHorsesStateType = {
  horses: [],
  compareHorses: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {
    addHorseToCompare: (state, { payload }) => {
      state.compareHorses.push(payload as HorseIdInterface);
    },
    removeHorseFromCompare: (state, { payload }) => {
      const index = state.compareHorses.findIndex(
        (horse) => horse.id === payload
      );
      state.compareHorses.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHorses.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getHorses.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.horses = payload;
    });
    builder.addCase(getHorses.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(deleteHorse.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(deleteHorse.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.horses = payload;
    });
    builder.addCase(deleteHorse.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});
export const { addHorseToCompare, removeHorseFromCompare } =
  horsesSlice.actions;
export default horsesSlice.reducer;
