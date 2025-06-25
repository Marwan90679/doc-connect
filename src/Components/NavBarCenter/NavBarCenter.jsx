import React from "react";
import { NavLink } from "react-router";

const NavBarCenter = () => {
  return (
    <div className="navbar-center hidden lg:flex justify-center">
      <ul className=" menu menu-horizontal space-x-5 font-medium text-[#0F0F0F] opacity-100  text-lg">
        <NavLink   to="/">            <li className="  hover:text-blue-700">Home</li>       </NavLink>
        <NavLink   to="/appointments"><li className="hover:text-blue-700">My bookings</li></NavLink>
        <NavLink   to="/blogs">       <li className="hover:text-blue-700">Blogs</li>      </NavLink>
        <NavLink   to="/contact">     <li className="hover:text-blue-700">Contact us </li></NavLink>
      </ul>
    </div>
  );
};

export default NavBarCenter;
