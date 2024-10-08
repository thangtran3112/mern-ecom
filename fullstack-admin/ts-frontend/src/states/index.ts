import { createSlice } from "@reduxjs/toolkit";
import { DARK, LIGHT } from "./constants";
import { PaletteMode } from "@mui/material";

export interface IState {
  mode: PaletteMode;
}

const initialState: IState = {
  mode: DARK,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === LIGHT ? DARK : LIGHT;
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;