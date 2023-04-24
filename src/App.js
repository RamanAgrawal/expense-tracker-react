
import './App.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/Signup';
import { Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  return (
    <Routes>
      
      <Route path='/' element={isLoggedIn&&<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<Login/>}/>
    
    </Routes>
  );
}

export default App;
