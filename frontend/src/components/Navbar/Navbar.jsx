import React from 'react'
import logo from '../../pictures/logo.png'
import './Navbar.css';

const Navbar = () => {
  return (
   
    <>
    <nav>
      <img src={logo} className='logo'/>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="teach">Teach With Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </>
  
  )
}

export default Navbar
