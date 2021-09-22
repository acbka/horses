import { createSlice } from "@reduxjs/toolkit";
import { getHorses } from "../requests/getHorses";
import { horseIdInterface } from "../../common/horseInterfaces";

type initialStateType = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  horses: horseIdInterface[];
  compareHorses: horseIdInterface[];
};

const initialState: initialStateType = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  horses: [],
  compareHorses: [],
};
const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {
    addHorseToCompare: (state, { payload }) => {
      state.compareHorses.push(payload as horseIdInterface);
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
    builder.addCase(getHorses.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(getHorses.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.horses = payload;
    });
  },
});

export const { addHorseToCompare, removeHorseFromCompare } =
  horsesSlice.actions;
export default horsesSlice.reducer;
