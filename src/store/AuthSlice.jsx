import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // isLoggedIn:true
  isLoggedIn: !!localStorage.getItem("token"),
  premium: false,
  isEligible: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.premium = false;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
    activatePremium: (state, action) => {
      state.premium = action.payload;
      state.isEligible = false;
    },
    changeEligibility: (state) => {
      state.isEligible = true;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
