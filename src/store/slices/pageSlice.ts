import { createSlice } from "@reduxjs/toolkit";

type InitialPageStateType = {
  page: number;
};

const initialState: InitialPageStateType = {
  page: 1,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setPage } = pagesSlice.actions;
export default pagesSlice.reducer;
