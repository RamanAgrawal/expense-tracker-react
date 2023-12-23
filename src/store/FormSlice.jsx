import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  editExpense: {},
};

const FormSlice = createSlice({
  name: "expenseForm",
  initialState,
  reducers: {
    openForm: (state) => {
      state.showForm = true;
    },
    closeForm: (state) => {
      state.showForm = false;
    },
    setEditValue: (state, action) => {
      state.editExpense = action.payload;
    },
  },
});

export const FormActions = FormSlice.actions;

export default FormSlice.reducer;
