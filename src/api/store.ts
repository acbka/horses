import { configureStore } from "@reduxjs/toolkit";
import horsesSlice from "./slices/horsesSlice";
import horseSlice from "./slices/horseSlice";
import { horseIdInterface } from "../common/horseInterfaces";
import { useDispatch } from "react-redux";
import pageSlice from "./slices/pageSlice";

export type HorseStateType = {
  horses: {
    horses: horseIdInterface[];
    isLoading: boolean;
    compareHorses: horseIdInterface[];
  };
  horse: {
    horse: horseIdInterface;
    isLoading: boolean;
  };
  pages: {
    page: number;
  };
};

const store = configureStore({
  reducer: {
    horses: horsesSlice,
    horse: horseSlice,
    pages: pageSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
