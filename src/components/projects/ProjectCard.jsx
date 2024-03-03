import React from "react";
import LoopCourse from "../../assets/Loop-Course.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    image: LoopCourse,
    title: "Loop Course",
    to: "https://loop-course-client.vercel.app",
    description:
      " Loop Courses web project provides you online learning experience and offers a diverse range of courses across various tech related courses.",

    stack: "   Node js , Express , Mongodb , React",
    features:
      "Admin Panel , Add Courses via Admin , Remove Course , Change Role , Buy Subscription",
  },
];
const ProjectCard = () => {
  return (
    <>
      {projects.map((item, index) => {
        return (
          <>
            <Link target="_blank"
              key={index}
              to={item.to}
              className="project-dev flex flex-col lg:flex-row justify-around p-10 gap-7"
            >
              <img
                className="shadow-md "
                src={item.image}
                width={800}
                height={700}
                alt=""
              />
              <div className="project-information text-white">
                <h1 className="lg:text-3xl text-xl underline mb-5 text-black font-bold ">
                  {item.title}
                </h1>
                <p className="description text-sm lg:text-lg font-mono">
                  {item.description}
                </p>
                <p className="text-sm lg:text-2xl mt-5">
                  Used Stack : <span className="text-black ">{item.stack}</span>{" "}
                </p>
                <p className="text-sm lg:text-2xl mt-5">
                  Features : <span className="text-black ">{item.features}</span>{" "}
                </p>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default ProjectCard;
