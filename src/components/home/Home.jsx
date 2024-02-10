import React from "react";
import ArrowLinks from "../layout/selected-project/ArrowLinks";
import Project from "../projects/Project";
import Skills from "../projects/Skills";

export const Home = () => {
  const projects = ["Loop Course", "Vipline", "Metafy", "Fleetsu"];
  return (
    <>
      <div className="home  lg:flex lg:justify-center lg:gap-8">
        <div className="heading mr-4 ml-4 mt-10 lg:w-[50%] ">
          <h1 className="text-4xl font-[500] mb-4 lg:text-8xl">
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


        {/* Selected Projects */}
        <div className="selected-project mr-4 ml-4 mt-10 text-gray-400 lg:w-[30%]">
          <p className="text-sm mb-4 underline lg:text-xl">SELECTED PROJECTS</p>

          <div className="project-list  ">
            {projects.map((project, i) => {
              return <ArrowLinks projectName={project} key={i} />;
            })}
          </div>
        </div>
      </div>
{/* skill box */}

<div className="skill-box mr-4 ml-4 mt-10">
  <Skills/>
</div>
      <div className="projects-shows ">
        <Project />
      </div>
    </>
  );
};
