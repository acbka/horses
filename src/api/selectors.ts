import { HorseStateType } from "./store";

export const selectHorses = (state: HorseStateType) => state.horses.horses;
export const selectIsHorsesLoading = (state: HorseStateType) =>
  state.horses.isLoading;
export const selectCompareHorses = (state: HorseStateType) =>
  state.horses.compareHorses;
export const selectHorse = (state: HorseStateType) => state.horse.horse;
export const selectPage = (state: HorseStateType) => state.pages.page;
