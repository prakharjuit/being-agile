import React, { useState } from "react";
import logo from "../../pictures/logo.png";
import "./Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <nav className='justify-evenly flex'>
      <img src={logo} className='hover:cursor-pointer'/>
      <ul>
        
            <li className=''><a href="/">Home</a></li>
            <li className=''><a href="about">About</a></li>
            <li className=''><a href="courses">Courses</a></li>
            <li className=''><a href="#blogs">Blogs</a></li>
            <li className='pr-20'><a href="teach">Teach With Us</a></li>
        <li className='bg-black hover:bg-slate-900 py-1 px-3 rounded'><a className='text-white text-sm' href="#contact">Contact Us</a></li>
      </ul>
      
    </nav>
    </>
  );
};

export default Navbar;




// import React from "react";
// import logo from "../../pictures/logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="justify-evenly flex">
//         <img src={logo} className="hover:cursor-pointer" />
//         <ul>
//           <li className="">
//             <a href="/">Home</a>
//           </li>
//           <li className="">
//             <a href="about">About</a>
//           </li>
//           <li className="">
//             <a href="courses">Courses</a>
//           </li>
//           <li className="">
//             <a href="#blogs">Blogs</a>
//           </li>
//           <li className="pr-20">
//             <a href="teach">Teach With Us</a>
//           </li>
//           <li className="bg-black hover:bg-slate-900 py-1 px-3 rounded">
//             <a className="text-white text-sm" href="#contact">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//         <select>
//           <option value="" selected="selected">
//             Select
//           </option>

//           <option value="/">Home</option>
//           <option value="/collections/all">Books</option>
//           <option value="/blogs/five-simple-steps-blog">Blog</option>
//           <option value="/pages/about-us">About Us</option>
//           <option value="/pages/support">Support</option>
//         </select>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
