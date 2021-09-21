import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseUrl } from "../endpoints";

export const getHorses = createAsyncThunk("horses/getHorse", async () => {
  const response = await fetch(horseUrl);
  const data = await response.json();
  return data;
});
