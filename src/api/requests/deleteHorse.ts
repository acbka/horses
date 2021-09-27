import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseByIdUrl } from "../endpoints";
import { horseIdInterface } from "../../common/horseInterfaces";

type DeleteHorseType = {
  horse: horseIdInterface;
};
export const deleteHorse = createAsyncThunk(
  "horse/deleteHorse",
  async ({ horse }: DeleteHorseType) => {
    const response = await fetch(horseByIdUrl(horse.id), {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(horse),
    });
    const data = await response.json(); 
    return data;
  }
);
