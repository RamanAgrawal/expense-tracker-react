import * as React from 'react';
import './Profile.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
export default function Profile() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const nameRef=React.useRef('')
    const [showUpdate,setShow]=React.useState(false)
    const { logout } = authActions
    const logoutHandler = () => {
        dispatch(logout())
        history('/signin')
    }
    const user=auth.currentUser;
    const verify=async()=>{
        try {
            await sendEmailVerification(user)
      
            alert('verifiacation email sent')
        } catch (error) {
            alert('nhi gya bhau')
        }

    }
    const updateProfileInfo=async(e)=>{
        e.preventDefault()
       await updateProfile(user,{displayName:`${nameRef.current.value}`})
       setShow(false)
       alert('updated')
    }
    return (
        <div className='main'>

            <div className='logo'></div>

            <div  >{user.displayName}</div>
            <div  >{user.email}</div>
            <button className='items'> Change Password</button>
            {showUpdate&& <form onSubmit={updateProfileInfo}>
                <label htmlFor="">name</label>
                <input ref={nameRef} type="text" />
               <button type='submit'>update</button>
                </form>}
           {!showUpdate&& <button className='items' onClick={()=>{setShow(true)}} >Update Profile</button>}
            <button className='items' onClick={verify} >Verify Email</button>
            <button className='items' onClick={logoutHandler} >Logout</button>

        </div>
    );
}