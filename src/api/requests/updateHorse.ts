import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseByIdUrl } from "../endpoints";
import { horseIdInterface } from "../../common/horseInterfaces";

type UpdateHorseType = {
  horse: horseIdInterface;
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
