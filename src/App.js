
import './App.css';
import DummyPage from './components/Pages/DummyPage';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/Signup';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      
      <Route path='/dummy' element={<DummyPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<Login/>}/>
    
    </Routes>
  );
}

export default App;
