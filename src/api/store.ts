import { configureStore } from "@reduxjs/toolkit";
import horsesSlice from "./slices/horsesSlice";
import horseSlice from "./slices/horseSlice";
import { horseIdInterface } from "../common/horseInterfaces";
import { useDispatch } from 'react-redux'

export type HorseStateType = {
  horses: {
    horses: horseIdInterface[];
  };
  horse: {
    horse: horseIdInterface;
  };
};

const store = configureStore({
  reducer: {
    horse: horseSlice,
    horses: horsesSlice,
  },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export default store;
