import { createSlice } from "@reduxjs/toolkit";
import { getHorses } from "../requests/getHorses";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  horses: [],
};
const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {},
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

export default horsesSlice.reducer;
