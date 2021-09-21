import { HorseStateType } from "./store";

export const selectHorses = (state: HorseStateType) => state.horses.horses;
export const selectHorse = (state: HorseStateType) => state.horse.horse;
