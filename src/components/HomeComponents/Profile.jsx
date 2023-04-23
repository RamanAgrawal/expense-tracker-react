import * as React from 'react';
import './Profile.css'

export default function Profile() {


    return (
        <div className='main'>

            <div className='logo'></div>

            <div  >Raman Agrawal</div>
           <button className='items'> Change Password</button>
            <button className='items' >Verify Email</button>
            <button className='items' >Logout</button>
           
        </div>
    );
}