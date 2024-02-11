
import ArrowLinks from "../layout/selected-project/ArrowLinks";
import Project from "../projects/Project";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

export const Home = () => {
  const projects = ["Loop Course", "Vipline", "Metafy", "Fleetsu"];
  return (
    <>
      <div className="home">
        <div className="  lg:flex lg:justify-center lg:gap-8">
          <div className="heading mr-4 ml-4 mt-10 lg:w-[50%] ">
            <h1 className="text-4xl font-[500] mb-4 lg:text-8xl underline">
              {" "}
              I'm Himanshu.
            </h1>
            <p className="lg:text-3xl">
              I design products with purpose and meticulous attention to detail
              Available for work.
            </p>
            <div className="button-talk mt-4">
              <button className="rounded-full bg-black text-white p-1 text-sm shadow-md lg:p-3">
                Talk with me
              </button>
            </div>
          </div>

          <div className="selected-project mr-4 ml-4 mt-10 text-gray-400 lg:w-[30%]">
            <p className="text-sm mb-4 underline lg:text-xl">
              SELECTED PROJECTS
            </p>

            <div className="project-list  ">
              {projects.map((project, i) => {
                return <ArrowLinks projectName={project} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* skill box */}

      <div className="skill bg-black mt-7   ">
        <h1 className=" skill text-xl mb-4 underline lg:text-4xl text-black p-4 font-semibold ">
          Skills
        </h1>
        <div className="p-1 flex flex-col h-32  flex-wrap lg:h-64 ">
          {" "}
          <div className="flex gap-2 text-xs m-3 text-white items-center lg:text-xl ">
            {" "}
            <BiLogoMongodb className="text-green-700 " /> Mongodb{" "}
          </div>
          <div className="flex gap-2 text-xs m-3 text-white items-center lg:text-xl">
            <SiExpress /> Express{" "}
          </div>
          <div className="flex gap-2 text-xs m-3 text-white items-center lg:text-xl">
            <FaReact className="text-blue-400" /> React{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <FaNodeJs className="text-green-700" /> Node js{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <FaSass className="text-pink-700" /> Sass{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <SiTypescript className="text-blue-700" /> Typescript{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <SiNextdotjs className="text-white" /> Next js{" "}
          </div>


          
        </div>
      </div>


      {/* projects */}


      <div className="skill bg-black mt-7   ">
        <h1 className=" skill text-xl mb-4 underline lg:text-4xl text-black p-4 font-semibold ">
          Projects
        </h1>
        <div className="p-1 flex flex-col h-32  flex-wrap lg:h-64 ">
          {" "}
          <div className="flex gap-2 text-xs m-3 text-white items-center lg:text-xl ">
            {" "}
            <BiLogoMongodb className="text-green-700 " /> Mongodb{" "}
          </div>
          <div className="flex gap-2 text-xs m-3 text-white items-center lg:text-xl">
            <SiExpress /> Express{" "}
          </div>
          <div className="flex gap-2 text-xs m-3 text-white items-center lg:text-xl">
            <FaReact className="text-blue-400" /> React{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <FaNodeJs className="text-green-700" /> Node js{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <FaSass className="text-pink-700" /> Sass{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <SiTypescript className="text-blue-700" /> Typescript{" "}
          </div>
          <div className="flex gap-2 text-xs m-3  text-white items-center lg:text-xl">
            {" "}
            <SiNextdotjs className="text-white" /> Next js{" "}
          </div>


          
        </div>
      </div>
    </>
  );
};
