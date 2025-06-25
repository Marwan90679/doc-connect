import React from "react";
import logoIcon from "../../assets/logo.png";
import { Link } from "react-router";
import NavBarCenter from "../NavBarCenter/NavBarCenter";
const Navbar = () => {
  return (
    <div className="w-full lg:w-10/12   md:w-8/12 mx-auto   flex p-4 justify-center">
      <div className="navbar-start ">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="bg-[#EFEFEF] menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='appointments'>
              <li>Bookings</li>
            </Link>
            <Link to='/blogs'>
              <li>Blogs</li>
            </Link>
            <Link to='/contact'>
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <Link to="/">
          
          <div className="flex items-center md:space-x-2">
            <img className="w-10" src={logoIcon} alt="logo" />
            <button className=" font-extrabold md:text-xl lg:text-2xl text-md">
              DocTalk
            </button>
          </div>
        </Link>
      </div>
      <NavBarCenter></NavBarCenter>
      <div className="navbar-end">
        <button className="text-blue-600 rounded-3xl px-4 py-2 border  border-blue-600  font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">
          Emergency
        </button>
      </div>
    </div>
  );
};

export default Navbar;
