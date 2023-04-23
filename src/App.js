
import './App.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/Signup';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<Login/>}/>
    
    </Routes>
  );
}

export default App;
