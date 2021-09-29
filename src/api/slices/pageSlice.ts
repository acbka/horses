import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
