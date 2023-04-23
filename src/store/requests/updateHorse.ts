import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseByIdUrl } from "../endpoints";
import { HorseIdInterface } from "../../common/types";

type UpdateHorseType = {
  horse: HorseIdInterface;
};

export const updateHorse = createAsyncThunk(
  "horse/updateHorse",
  async ({ horse }: UpdateHorseType) => {
    const response = await fetch(horseByIdUrl(horse.id), {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(horse),
    });
    const data = await response.json();
    return data;
  }
);
