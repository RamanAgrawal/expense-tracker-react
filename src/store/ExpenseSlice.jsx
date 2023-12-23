import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  totalExpenses: 0,
};

const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const findExpenseIndex = state.expenses.findIndex(
        (item) => item.id === action.payload.id
      );
      const updateExpense = state.expenses[findExpenseIndex];

      if (updateExpense) {
        state.expenses[findExpenseIndex] = action.payload;
        state.totalExpenses += +action.payload.amount - +updateExpense.amount;
      } else {
        state.expenses.push(action.payload);
        state.totalExpenses += +action.payload.amount;
      }
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalExpenses = +state.totalExpenses - +action.payload.amount;
    },

    changeData: (state, action) => {
      state.expenses = action.payload.expense;
      state.totalExpenses = action.payload.totalExpense;
    },
  },
});

export const ExpenseAction = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
