import React from 'react'

import pic from "../../public/shubha.jpeg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <>
     <div name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-24
                bg-white dark:bg-slate-950 text-gray-800 dark:text-white transition-colors duration-300">

      {/* Welcome */}
      <span className=" w-full inline-block text-sm md:text-base font-semibold
                       text-blue-600 dark:text-blue-400
                       mb-2">
        👋 Welcome to My Portfolio
      </span>

  <div className="flex flex-col md:flex-row items-center">

    {/* Left Content */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">

      {/* Heading */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1
                      text-2xl md:text-4xl font-bold leading-tight">

        <h1>Hello, I'm a </h1>

        <ReactTyped
          className="text-blue-600 dark:text-blue-400"
          strings={["MERN Stack Developer", "Full Stack Developer", "JavaScript Developer", "Software Developer",]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

      </div>

      {/* Description */}
      <p className="mt-6 max-w-xl text-sm md:text-base
                    leading-7 text-gray-600 dark:text-gray-400
                    text-justify md:text-left">
        I am a passionate MERN Stack Developer with experience in
        building responsive and user-friendly web applications using
        MongoDB, Express.js, React.js, and Node.js. I enjoy creating
        modern, scalable, and efficient solutions while continuously
        learning new technologies to improve my development skills.
      </p>

      {/* Social + Technologies */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
            Available On
          </h2>

          <ul className="flex items-center gap-5">

            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaSquareFacebook
                  className="text-2xl md:text-3xl
                             text-gray-600 dark:text-gray-400
                             hover:text-blue-600 dark:hover:text-blue-400
                             hover:scale-110
                             transition-all duration-300"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/shubha-hazra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaLinkedin
                  className="text-2xl md:text-3xl
                             text-gray-600 dark:text-gray-400
                             hover:text-blue-600 dark:hover:text-blue-400
                             hover:scale-110
                             transition-all duration-300"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/shubhahazra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaGithub
                  className="text-2xl md:text-3xl
                             text-gray-600 dark:text-gray-400
                             hover:text-gray-900 dark:hover:text-white
                             hover:scale-110
                             transition-all duration-300"
                />
              </a>
            </li>

            <li>
              <a
                href="https://web.telegram.org/a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaTelegram
                  className="text-2xl md:text-3xl
                             text-gray-600 dark:text-gray-400
                             hover:text-blue-500
                             hover:scale-110
                             transition-all duration-300"
                />
              </a>
            </li>

          </ul>
        </div>

        {/* Currently Working On */}
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
            Currently Working On
          </h2>

          <div className="flex items-center gap-5">

            <SiMongodb
              className="text-2xl md:text-3xl
                         text-gray-600 dark:text-gray-400
                         hover:text-green-500
                         hover:scale-110
                         transition-all duration-300"
              title="MongoDB"
            />

            <SiExpress
              className="text-2xl md:text-3xl
                         text-gray-600 dark:text-gray-400
                         hover:text-gray-900 dark:hover:text-white
                         hover:scale-110
                         transition-all duration-300"
              title="Express.js"
            />

            <FaReact
              className="text-2xl md:text-3xl
                         text-gray-600 dark:text-gray-400
                         hover:text-cyan-500
                         hover:scale-110
                         transition-all duration-300"
              title="React.js"
            />

            <FaNodeJs
              className="text-2xl md:text-3xl
                         text-gray-600 dark:text-gray-400
                         hover:text-green-500
                         hover:scale-110
                         transition-all duration-300"
              title="Node.js"
            />

          </div>
        </div>

      </div>
    </div>


    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center
                    order-1 md:order-2 mb-12 md:mb-0">

      <div className="relative">

        {/* Decorative background */}
        <div className="absolute inset-0 rounded-full
                        bg-blue-500/10 dark:bg-blue-500/20
                        blur-2xl scale-110">
        </div>

        {/* Profile Image */}
        <img
          src={pic}
          alt="Shubha Hazra"
          className="relative
                     w-64 h-64
                     sm:w-72 sm:h-72
                     md:w-80 md:h-80
                     lg:w-96 lg:h-96
                     object-cover rounded-full
                     border-4 border-blue-500/20
                     dark:border-blue-400/20
                     shadow-2xl
                     hover:scale-105
                     transition-transform duration-500"
        />

      </div>

    </div>

  </div>

     </div>

     <hr className="border-gray-200 dark:border-slate-800" />
    </>
  )
}

export default Home

