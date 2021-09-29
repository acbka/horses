import { createAsyncThunk } from "@reduxjs/toolkit";
import { horsesUrl } from "../endpoints";
import { horseInterface } from "../../common/horseInterfaces";

type AddHorseType = {
  horse: horseInterface;
};

export const addHorse = createAsyncThunk(
  "horse/addHorse",
  async ({ horse }: AddHorseType) => {
    const response = await fetch(horsesUrl, {
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
