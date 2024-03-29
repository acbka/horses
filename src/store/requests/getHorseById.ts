import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseByIdUrl } from "../endpoints";

export const getHorseById = createAsyncThunk(
  "horse/getHorseById",
  async (id: string, thunkApi) => {
    try {
      const response = await fetch(horseByIdUrl(id));
      const data = await response.json();
      return data;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
