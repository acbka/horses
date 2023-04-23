import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import horsesReducer from "./slices/horsesSlice";
import horseReducer from "./slices/horseSlice";
import pageReducer from "./slices/pageSlice";
import { HorseIdInterface } from "../common/types";

export type HorseStateType = {
  horses: {
    horses: HorseIdInterface[];
    isLoading: boolean;
    compareHorses: HorseIdInterface[];
  };
  horse: {
    horse: HorseIdInterface;
    isLoading: boolean;
  };
  pages: {
    page: number;
  };
};

const store = configureStore({
  reducer: {
    horses: horsesReducer,
    horse: horseReducer,
    pages: pageReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
