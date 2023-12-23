import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const DarkModeSlice = createSlice({
  name: "dark-mode",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const DarkActions = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
