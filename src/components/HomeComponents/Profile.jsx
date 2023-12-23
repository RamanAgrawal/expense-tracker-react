import * as React from "react";
import "./Profile.css";
import logo from "./logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import { sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpenseAction } from "../../store/ExpenseSlice";
export default function Profile() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [showUpdate, setShow] = React.useState(false);
  const { logout } = authActions;
  const { changeData } = ExpenseAction;
  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
    dispatch(changeData({ expense: [], totalExpense: 0 }));
    history("/signin");
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = auth.currentUser;
  const [name, setname] = React.useState(user?.displayName ? user.displayName : "")
  const verify = async () => {
    try {
      await sendEmailVerification(user);
      alert("verifiacation email sent");
    } catch (error) {
      alert("faild to send email");
    }
  };
  const updateProfileInfo = async (e) => {
    e.preventDefault();
    await updateProfile(user, { displayName: name });
    setShow(false);
  };
  return (
    <List>
      <ListItem style={{ display: "flex", justifyContent: "center" }}>
        <Avatar alt="Remy Sharp" src={logo} />
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            primary={`Hi,${user?.displayName ? user.displayName : ""}`}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            style={{ display: "flex", justifyContent: "center" }}
            primary={user?.email ? user.email : ""}
          />
        </ListItemButton>
      </ListItem>
      {showUpdate && (
        <ListItem>
          <form onSubmit={updateProfileInfo}>
            <label htmlFor="">Name</label>
            <input className="input" onChange={(e)=>setname(e.target.value)} type="text"  value={name}/>
            <button className="btn" type="submit">Edit Profile</button>
          </form>
        </ListItem>
      )}
      {isLoggedIn &&
        <>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setShow(true);
              }}
            >
              <ListItemIcon>{/* <MailIcon /> */}</ListItemIcon>
              <ListItemText primary={"Edit Profile"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={verify}>
              <ListItemIcon>{/* <MailIcon /> */}</ListItemIcon>
              <ListItemText primary={"Verify Email"} />
            </ListItemButton>
          </ListItem>
        </>
      }
      <ListItem disablePadding>
        <ListItemButton onClick={logoutHandler}>
          <ListItemIcon>{/* <MailIcon /> */}</ListItemIcon>
          <ListItemText primary={isLoggedIn ? "Logout" : "Login"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
