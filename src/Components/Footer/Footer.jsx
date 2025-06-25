import React from "react";
import logoIcon from "../../assets/logo.png";
import { Link } from "react-router";
import NavBarCenter from "../NavBarCenter/NavBarCenter";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="mt-10  bg-[#29808698]  px-10 pb-25 space-y-4">
      <Link to="/">
        <div className="flex items-center md:space-x-2  justify-center pt-10 pb-5">
          <img className="w-10" src={logoIcon} alt="logo" />
          <button className=" font-extrabold md:text-xl lg:text-2xl text-md">
            DocTalk
          </button>
        </div>
      </Link>

      <NavBarCenter></NavBarCenter>
      <hr
        className="hidden lg:flex  border-dashed border-t-2
                my-4 opacity-50"
      />
      <div className="flex justify-center gap-4 text-3xl">
      <Link  to='https://www.x.com' ><  FaSquareXTwitter /></Link>
      <Link  to='https://www.facebook.com'      ><  FaFacebook /></Link>
      <Link  to='https://www.linkedin.com'      ><  FaLinkedin /></Link>
      <Link  to='https://www.youtube.com'      ><  IoLogoYoutube /></Link>
      
      
      
      </div>
    </footer>
  );
};

export default Footer;
