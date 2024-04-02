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
      <nav className="justify-evenly flex">
        <img src={logo} className="hover:cursor-pointer" />

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex ${showMenu ? 'hidden' : ''}`}>
          <li className="">
            <a href="/">Home</a>
          </li>
          <li className="">
            <a href="about">About</a>
          </li>
          <li className="">
            <a href="courses">Courses</a>
          </li>
          <li className="">
            <a href="#blogs">Blogs</a>
          </li>
          <li className="pr-20 min-w-5">
            <a href="teach">Teach With Us</a>
          </li>
          <li className="bg-black hover:bg-slate-900 py-1 px-3 rounded">
            <a className="text-white text-sm" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <ul className={` lg:hidden ${showMenu ? 'block' : 'hidden'} mt-96 delay-75 duration-100 bg-slate-50 z-10 rounded-lg p-4 transition-all  flex flex-col`}>
        <img src={logo} className="hover:cursor-pointer" />
          <li className="">
            <a href="/">Home</a>
          </li>
          <li className="">
            <a href="about">About</a>
          </li>
          <li className="">
            <a href="courses">Courses</a>
          </li>
          <li className="">
            <a href="#blogs">Blogs</a>
          </li>
          <li className="pr-20">
            <a href="teach">Teach With Us</a>
          </li>
          <li className="bg-black hover:bg-slate-900 py-1 px-3 rounded">
            <a className="text-white text-sm" href="#contact">
              Contact Us
            </a>
          </li>
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
