import { createAsyncThunk } from "@reduxjs/toolkit";
import { horsesUrl } from "../endpoints";

export const getHorses = createAsyncThunk("horses/getHorse", async () => {
  const response = await fetch(horsesUrl);
  const data = await response.json();
  return data;
});
