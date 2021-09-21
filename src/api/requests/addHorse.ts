import { createAsyncThunk } from "@reduxjs/toolkit";
import { horseUrl } from "../endpoints";
import { horseInterface } from "../../common/horseInterfaces";

type AddHorseType = {
  horse: horseInterface;
};

export const addHorse = createAsyncThunk(
  "horse/addHorse",
  async ({ horse }: AddHorseType) => {
    const response = await fetch(horseUrl, {
       headers: {
         "Content-Type": "application/json",
       },
      method: "PUT",
      body: JSON.stringify(horse),
    });
    const data = await response.json();
    return { ...horse, id: data };
  }
);
