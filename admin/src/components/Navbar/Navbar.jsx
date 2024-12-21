// import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logogo} alt="" />
      <img className='profile' src={assets.profile} alt="" />
    </div>
  )
}

export default Navbar
