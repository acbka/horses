import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseByIdUrl } from "../endpoints";

type HorseIdType = {
  id: string;
};

export const getHorseById = createAsyncThunk(
  "horse/getHorseById",
  async ({ id }: HorseIdType) => {
    const response = await fetch(horseByIdUrl(id));
    const data = await response.json();
    return data;
  }
);
