import { createSlice } from "@reduxjs/toolkit";
import { getHorses } from "../requests/getHorses";

const initialState = { horses: [] };
const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHorses.fulfilled, (state, { payload }) => {
      state.horses = payload;
    });
  },
});

export default horsesSlice.reducer;
