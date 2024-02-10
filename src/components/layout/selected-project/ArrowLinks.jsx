import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const ArrowLinks = ({ projectName,projectLink }) => {
  return (
    <Link className="arrow-links mb-4 text-sm text-black flex items-center justify-between border-b p-2 hover:border-b-gray-600 transition-all duration-300 hover:translate-x-5 lg:text-2xl ">
      {projectName} <IoIosArrowRoundForward className="lg:text-4xl" />
    </Link>
  );
};

export default ArrowLinks;
