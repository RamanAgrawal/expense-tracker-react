
import './App.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/Signup';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPassword from './components/Pages/ForgotPassword'
import { useEffect } from 'react';
import { ExpenseAction } from './store/ExpenseSlice';
import axios from 'axios';
;
function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch=useDispatch()
  const useremail = localStorage.getItem('email')
const user = useremail.replace('@', "").replace('.', "")
  const {changeData}=ExpenseAction
  useEffect(() => {
    const GetDataFromDataBase = async () => {
  
      try {
          const res = await axios.get(`https://expense-tracker-b240a-default-rtdb.firebaseio.com/${user}.json`)
          if(res.data.expense){
          dispatch(changeData(res.data))
          }
          console.log(res.data);
      } catch (error) {
          console.log(error);
      }
  }
  GetDataFromDataBase()
  }, [isLoggedIn,changeData,dispatch,user])
  return (
    <Routes>

      <Route path='/' element={isLoggedIn && <Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />

    </Routes>
  );
}

export default App;
