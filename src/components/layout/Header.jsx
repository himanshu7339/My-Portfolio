import React from "react";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="mobileHeader flex items-center p-1 border rounded-lg justify-around m-3 lg:justify-end lg:gap-10 lg:border-none">
      <div className="user border p-1 rounded-full cursor-pointer ">
        <RiUserLine />
      </div>
      {/* <Link className="text-sm font-semibold hover:underline transition-all ease-in duration-300" to={"/about"}>
        About
      </Link> */}
      {/* <Link className="text-sm font-semibold transition duration-500 hover:underline" to="/work">
      Work
    </Link> */}
      <Link target="_blank" className="text-sm font-semibold lg:mr-4 hover:underline transition-all ease-in duration-300" to={"https://wa.me/918376849918"}>
      <IoLogoWhatsapp className="text-4xl text-green-500" />
      </Link>
    </div>
  );
};

export default Header;
