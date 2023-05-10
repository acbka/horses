import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseByIdUrl } from "../endpoints";
import { HorseIdInterface } from "../../common/types";

export const deleteHorse = createAsyncThunk(
  "horse/deleteHorse",
  async (horse: HorseIdInterface, thunkApi) => {
    try {
      const response = await fetch(horseByIdUrl(horse.id), {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify(horse),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
