import { createAsyncThunk } from "@reduxjs/toolkit";
import { horsesUrl } from "../endpoints";

export const getHorses = createAsyncThunk(
  "horses/getHorses",
  async (_, thunkApi) => {
    try {
      const response = await fetch(horsesUrl);
      const data = await response.json();
      return data;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
