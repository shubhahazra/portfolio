import React from 'react'

import html from "../../public/HTML5.png";
import tailwind from "../../public/Tailwind CSS.png";
import javaScript from "../../public/JavaScript.png";
import mongoDB from "../../public/MongoDB.png";
import expressjs from "../../public/expressjs.png";
import react from "../../public/React.png";
import nodejs from "../../public/Node.js.png";
import java from "../../public/Java.png";
import springBoot from "../../public/springBoot.png";
import python from "../../public/Python.png";

const Skills = () => {
    const cardItems=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:tailwind,
            name:"Tailwind Css"
        },
        {
            id:3,
            logo:javaScript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:mongoDB,
            name:"MongoDB"
        },
        {
            id:5,
            logo:expressjs,
            name:"Express Js"
        },
        {
            id:6,
            logo:react,
            name:"React Js"
        },
        {
            id:7,
            logo:nodejs,
            name:"Node Js"
        },
        {
            id:8,
            logo:java,
            name:"Java"
        },
        {
            id:9,
            logo:springBoot,
            name:"Spring Boot"
        },
        {
            id:10,
            logo:python,
            name:"Python"
        },
        
    ]

  return(
    <div name="Skills"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-white dark:bg-slate-950 text-gray-800 dark:text-white transition-colors duration-300">
  <div className="text-center">

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      My{" "}
      <span className="text-blue-600 dark:text-blue-400">
        Skills & Technologies
      </span>
    </h1>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
      I have hands-on experience with modern web development
      technologies. I enjoy building responsive, user-friendly,
      and scalable web applications using the following skills.
    </p>

    {/* Skills Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7 mt-10">

      {cardItems.map(({ id, logo, name }) => (
        <div
          key={id}
          className="group flex flex-col items-center justify-center
          border border-gray-200 dark:border-slate-700
          bg-gray-50 dark:bg-slate-900
          rounded-2xl shadow-md
          p-5 h-[180px] md:h-[200px]
          cursor-pointer
          hover:border-blue-500 dark:hover:border-blue-400
          hover:shadow-xl hover:shadow-blue-500/10
          hover:-translate-y-2
          transition-all duration-300"
        >

          {/* Logo */}
          <div className="flex items-center justify-center
            w-28 h-28 md:w-32 md:h-32
            rounded-full overflow-hidden
            bg-white dark:bg-slate-800
            p-3
            group-hover:scale-110
            transition-transform duration-300"
          >
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Technology Name */}
          <h2 className="mt-4 text-base md:text-lg font-semibold
            text-gray-800 dark:text-gray-200
            group-hover:text-blue-600 dark:group-hover:text-blue-400
            transition-colors duration-300"
          >
            {name}
          </h2>

        </div>
      ))}

    </div>
  </div>
</div>
  )
}

export default Skills