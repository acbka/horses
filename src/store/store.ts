import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
