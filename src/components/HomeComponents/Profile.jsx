import * as React from 'react';
import './Profile.css'
import logo from './logo.jpg'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpenseAction } from '../../store/ExpenseSlice';
export default function Profile() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const nameRef = React.useRef('')
    const [showUpdate, setShow] = React.useState(false)
    const { logout } = authActions
    const { changeData } = ExpenseAction
    const logoutHandler = () => {
        dispatch(logout())
        dispatch(changeData({expense:[],totalExpense:0}))
        history('/signin')
    }
    const user = auth.currentUser;
    const verify = async () => {
        try {
            await sendEmailVerification(user)

            alert('verifiacation email sent')
        } catch (error) {
            alert('nhi gya bhau')
        }

    }
    const updateProfileInfo = async (e) => {
        e.preventDefault()
        await updateProfile(user, { displayName: `${nameRef.current.value}` })
        setShow(false)
        alert('updated')
    }
    return (
        <List >
            <ListItem style={{ display: 'flex', justifyContent: 'center' }} >
                <Avatar alt="Remy Sharp" src={logo} />
            </ListItem>
            <ListItem >

                <ListItemButton >
                    <ListItemText style={{
                        display: 'flex', justifyContent: 'center'
                    }}
                        primary={`Hi,${user.displayName ? user.displayName : ''}`} />
                </ListItemButton>

            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>

                    <ListItemText style={{ display: 'flex', justifyContent: 'center' }} primary={user.email} />
                </ListItemButton>
            </ListItem>
            {showUpdate && <ListItem>
                <form onSubmit={updateProfileInfo}>
                    <label htmlFor="">name</label>
                    <input ref={nameRef} type="text" value={user.displayName} />
                    <button type='submit'>Edit Profile</button>
                </form>
            </ListItem>}
            <ListItem disablePadding>
                <ListItemButton onClick={() => { setShow(true) }}>
                    <ListItemIcon>
                        {/* <MailIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary={'Edit Profile'} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={verify}>
                    <ListItemIcon>
                        {/* <MailIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary={'Verify Email'} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={logoutHandler}>
                    <ListItemIcon>
                        {/* <MailIcon /> */}
                    </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </ListItemButton>
            </ListItem>

        </List>
       
    );
}