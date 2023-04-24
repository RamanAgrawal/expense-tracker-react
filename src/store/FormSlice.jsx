import { createSlice } from '@reduxjs/toolkit'

const initialState = {
showForm:false
}

const FormSlice = createSlice({
  name: 'expenseForm',
  initialState,
  reducers: {
    openForm:(state)=>{
        state.showForm=true
    },
    closeForm:(state)=>{
        state.showForm=false
    }
  }
});

export const FormActions = FormSlice.actions

export default FormSlice.reducer