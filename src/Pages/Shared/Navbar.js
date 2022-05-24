import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo-removebg-preview.png';
const Navbar = () =>  {
  const menuItems = (
    <>
     <li><Link  className="text-2xl" to="/">Home</Link ></li>
      <li><Link className="text-2xl" to="/about">About</Link></li>
      <li><Link className="text-2xl" to="/blog">Blog</Link></li>
      <li><Link className="text-2xl" to="/dashbroad">Dashbroad</Link></li>
      <li><Link className="text-2xl" to="/appointment">Apponitment</Link></li>
      <li><Link className="text-2xl" to="/purchase">Purchase</Link></li>
      <li><Link className="text-2xl" to="/login">Login</Link ></li>
    </>
  );
  return (
    <div className="navbar  bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100%"
          >
            {menuItems}
           
          </ul>
          
        </div>
        <img className=" ml-5 w-30 h-20" src={logo} alt="" />
        <Link to="/" className="btn btn-ghost normal-case mx-8  text-4xl"> Handiworks</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
