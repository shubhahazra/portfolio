import React from 'react'

import tictactoe from "../../public/tic_tac_toe.png";
import bookStore from "../../public/bookstore.png";
import cilliblog from "../../public/cilliblog.png";
import eventora from "../../public/eventora.png";

const Projects = () => {
    const cardItems=[
        {
            id:1,
            logo:tictactoe,
            name:"Tic Tac Toe",
            code: "https://github.com/shubhahazra/tic-tac-toe-react",
            // vid
        },
        {
            id:2,
            logo:bookStore,
            name:"BookStore",
            code: "https://github.com/shubhahazra/bookStoreApp"
        },
        {
            id:3,
            logo:cilliblog,
            name:"CilliBlog",
            code: "https://github.com/shubhahazra/blog-app"
        },
        {
            id:4,
            logo:eventora,
            name:"Eventora",
            code: "https://github.com/shubhahazra"
        },
    ]

  return (
    <div name="Project"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 pb-48 pt-20 bg-white dark:bg-slate-950 text-gray-800 dark:text-white">

  <div >

    {/* Heading */}
    <div className="text-center mb-10">

      <h1 className="text-3xl md:text-4xl font-bold mb-4
        text-gray-900 dark:text-white"
      >
        My{" "}
        <span className="text-blue-600 dark:text-blue-400">
          Projects
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-gray-600
        dark:text-gray-400 leading-relaxed"
      >
        Explore some of the projects I have built using modern
        web development technologies. Each project reflects my
        skills in frontend development, backend integration,
        and creating responsive user experiences.
      </p>

    </div>


    {/* Project Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {cardItems.map(({ id, logo, name, code }) => (

        <div
          key={id}
          className="group flex flex-col h-full overflow-hidden
          rounded-2xl
          border border-gray-200 dark:border-slate-700
          bg-white dark:bg-slate-900
          shadow-md dark:shadow-black/20
          cursor-pointer
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-blue-500 dark:hover:border-blue-400
          transition-all duration-300"
        >

          {/* Project Image */}
          <div className="overflow-hidden">

            <img
              src={logo}
              alt={name}
              className="w-full h-52 md:h-56 object-cover transition-transform duration-500"
            />

          </div>


          {/* Project Details */}
          <div className="flex flex-1 flex-col p-5">

            <h2 className="text-xl font-bold
              text-gray-900 dark:text-white"
            >
              {name}
            </h2>

            <p className="mt-3 text-sm leading-6
              text-gray-600 dark:text-gray-400"
            >
              A modern and responsive web application built
              using modern technologies to solve real-world
              problems and deliver a smooth user experience.
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto pt-6">

              <button
                className="flex-1 rounded-lg
                bg-blue-600 px-3 py-2.5
                text-sm font-semibold text-white
                hover:bg-blue-700
                focus:outline-none focus:ring-2
                focus:ring-blue-500 focus:ring-offset-2
                dark:focus:ring-offset-slate-900
                transition duration-300"
              >
                Video
              </button>

              <button
                className="flex-1 rounded-lg
                border border-gray-300
                dark:border-slate-600
                px-3 py-2.5
                text-sm font-semibold
                text-gray-700 dark:text-gray-200
                hover:bg-gray-100
                dark:hover:bg-slate-800
                focus:outline-none focus:ring-2
                focus:ring-blue-500 focus:ring-offset-2
                dark:focus:ring-offset-slate-900
                transition duration-300"
              >
                <a
                 href={code}
                 target='_blank'
                >
                  Source Code
                </a>
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
  )
}

export default Projects