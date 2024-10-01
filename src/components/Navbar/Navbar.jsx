import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo_black} alt="logo" />
            <img className='profile' src={assets.profile} alt="profile" />
        </div>
    )
}

export default Navbar