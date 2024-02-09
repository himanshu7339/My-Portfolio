import React from "react";
import ArrowLinks from "../layout/selected-project/ArrowLinks";
import Project from "../projects/Project";

export const Home = () => {
  const projects = ["Payper", "Vipline", "Metafy", "Fleetsu"];
  return (
    <div className="home h-[1200vh]">
      <div className="heading mr-4 ml-4 mt-10 ">
        <h1 className="text-4xl font-semibold mb-4"> I'm Himanshu.</h1>
        <p>
          I design products with purpose and meticulous attention to detail
          Available for work.
        </p>
      </div>

      {/* Selected Projects */}
      <div className="selected-project mr-4 ml-4 mt-10 text-gray-400">
        <p className="text-sm mb-4">SELECTED PROJECTS</p>

        <div className="project-list ">
        {projects.map((project, i) => {
          return <ArrowLinks projectName={project} key={i} />;
        })}

        </div>
        
      </div>

      <div className="projects-shows sticky top-12">
        <Project/>
      </div>
    </div>
  );
};
