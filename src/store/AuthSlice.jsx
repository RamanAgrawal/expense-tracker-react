import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoggedIn:false,

}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state,action)=>{
        state.isLoggedIn=true
        localStorage.setItem('token',action.payload)
    },
    logout:(state)=>{
        state.isLoggedIn=false
    }
  }
});

export const authActions= AuthSlice.actions

export default AuthSlice.reducer