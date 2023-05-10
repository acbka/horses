import { createAsyncThunk } from "@reduxjs/toolkit";
import { horsesUrl } from "../endpoints";
import { HorseInterface } from "../../common/types";

export const addHorse = createAsyncThunk(
  "horse/addHorse",
  async (horse: HorseInterface, thunkApi) => {
    try {
      const response = await fetch(horsesUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(horse),
      });
      const data = await response.json();
      return { ...horse, id: data };
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
