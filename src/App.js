import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/Signup";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ForgotPassword from "./components/Pages/ForgotPassword";
import React, { useEffect } from "react";
import { ExpenseAction } from "./store/ExpenseSlice";
import ReactDOM from "react-dom";
import axios from "axios";
import { authActions } from "./store/AuthSlice";
import NewExpense from "./components/HomeComponents/NewExpense";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { changeData } = ExpenseAction;
  const { activatePremium } = authActions;
  // const history=useNavigate()
  const GetDataFromDataBase = async (user) => {
    try {
      const res = await axios.get(
        `https://expense-tracker-b240a-default-rtdb.firebaseio.com/${user}.json`
      );
      if (res.data.expense) {
        dispatch(changeData(res.data));
      }
      dispatch(activatePremium(res.data.premium));
    } catch (error) {}
  };

  useEffect(() => {
    // !isLoggedIn&&history('/signup')
    const useremail = localStorage.getItem("email");
    if (useremail) {
      const user = useremail.replace("@", "").replace(".", "");
      GetDataFromDataBase(user);
    }
  }, [dispatch, isLoggedIn]);
  const showForm = useSelector((state) => state.expenseForm.showForm);
  return (
    <div style={{ backgroundColor: "" }}>
      {showForm &&
        ReactDOM.createPortal(
          <NewExpense />,
          document.getElementById("add-expense")
        )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
