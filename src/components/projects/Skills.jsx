import React from 'react'
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
const Skills = () => {
  return (
    <div className='skill  mr-4 ml-4 mt-10   '>
        <h1 className='text-xl mb-4 underline lg:text-xl text-gray-400'>Skill</h1>
        <div className='flex gap-2 items-center lg:text-xl '> <BiLogoMongodb className='text-green-700 ' /> Mongodb </div>
        <div className='flex gap-2 items-center lg:text-xl'><SiExpress /> Express </div>
        <div className='flex gap-2 items-center lg:text-xl'><FaReact  className='text-blue-400'/> React  </div>
        <div className='flex gap-2 items-center lg:text-xl'> <FaNodeJs className='text-green-700' /> Node js </div>
       
    </div>
  )
}

export default Skills