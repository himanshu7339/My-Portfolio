import React from "react";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="mobileHeader flex items-center p-1 border rounded-lg justify-around m-3 lg:justify-end lg:gap-10 lg:border-none">
      <div className="user border p-1 rounded-full ">
        <RiUserLine />
      </div>
      <Link className="text-sm font-semibold hover:underline transition-all ease-in duration-300" to={"/about"}>
        About
      </Link>
      <Link className="text-sm font-semibold transition duration-500 hover:underline" to="/work">
      Work
    </Link>
      <Link className="text-sm font-semibold lg:mr-4 hover:underline transition-all ease-in duration-300" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
