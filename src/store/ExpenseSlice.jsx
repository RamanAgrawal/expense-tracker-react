import { createSlice } from '@reduxjs/toolkit'

const initialState = {
expenses:[],
totalExpenses:0
}

const ExpenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense:(state,action)=>{
      console.log(action.payload);
        state.expenses.push(action.payload)
        state.totalExpenses+=+action.payload.amount
    },
    removeExpense:(state,action)=>{
      state.expenses=state.expenses.filter(item=>item.id!==action.payload.id)
      state.totalExpenses= +state.totalExpenses-(+action.payload.amount)
    },
    editExpense:(state,action)=>{
      const findExpenseIndex=state.expenses.findIndex(item=>item.id===action.payload.id)
      const updateExpense=state.expenses[findExpenseIndex]
      state.expenses[findExpenseIndex]=action.payload
      state.totalExpenses+= +action.payload.amount-(+updateExpense.amount)
    }
  }
});

export const ExpenseAction= ExpenseSlice.actions

export default ExpenseSlice.reducer