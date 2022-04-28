import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
