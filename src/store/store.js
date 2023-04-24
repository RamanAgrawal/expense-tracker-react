import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'
import ExpenseSlice from './ExpenseSlice'
import FormSlice from './FormSlice'

const store=configureStore({
    reducer:{
        auth:AuthSlice,
        expense:ExpenseSlice,
        expenseForm:FormSlice
    }
})
export default store