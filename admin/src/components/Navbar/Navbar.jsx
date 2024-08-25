import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import '../../index.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <p className='text'>Admin Panel</p>
      <img className="profile" src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbar
