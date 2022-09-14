import React from 'react'
import './Navbar.style.css';
import { FaMoon } from "react-icons/fa";

function Navbar({ handleDark }) {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='logo'>Docket</div>
            <button onClick={()=>{handleDark((prev)=>!prev)}} className='toggle-btn'><FaMoon/> Toggle Mode</button>
        </div>
    </div>
  )
}

export default Navbar;
