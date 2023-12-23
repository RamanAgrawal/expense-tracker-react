import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ExpenseSlice from "./ExpenseSlice";
import FormSlice from "./FormSlice";
import DarkModeSlice from "./DarkModeSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    expense: ExpenseSlice,
    expenseForm: FormSlice,
    darkMode: DarkModeSlice,
  },
});
export default store;
