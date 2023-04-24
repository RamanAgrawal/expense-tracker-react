import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoggedIn:!! localStorage.getItem('token'),

}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state,action)=>{
        state.isLoggedIn=true
        localStorage.setItem('token',action.payload)
        localStorage.setItem('token',action.payload)
    },
    logout:(state)=>{
        state.isLoggedIn=false
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
  }
});

export const authActions= AuthSlice.actions

export default AuthSlice.reducer