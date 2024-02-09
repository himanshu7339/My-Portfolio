import React from "react";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
const MobileHeader = () => {
  return (
    <div className="mobileHeader flex items-center p-1 border rounded-lg justify-around m-3 ">
      <div className="user border p-1 rounded-full ">
        <RiUserLine />
      </div>
      <Link className="text-sm font-semibold" to={"/about"}>
        About
      </Link>
      <Link className="text-sm font-semibold" to={"/work"}>
        Work
      </Link>
      <Link className="text-sm font-semibold" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
};

export default MobileHeader;
