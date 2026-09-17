import React, { useState } from 'react'
import pic from "../../public/computer.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Project"
        },
        {
            id:4,
            text:"Skills"
        },
        {
            id:5,
            text:"Contact"
        }
    ]
  return (
    <>
       <div
  className="
    fixed top-0 left-0 right-0 z-50
    h-16
    border-b border-gray-800
    bg-slate-950/95
    shadow-lg shadow-black/10
    backdrop-blur-md
    dark:bg-slate-950/95
    light:bg-white/95
  "
>
  <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
    
    {/* Navbar */}
    <div className="flex justify-between items-center h-16">

      {/* Logo + Name */}
      <div className="flex items-center gap-3">

        <img
          src={pic}
          alt="Shubha Hazra"
          className="
            h-11 w-11
            rounded-full
            object-cover
            border-2 border-blue-500
            shadow-md
          "
        />

        <div className="leading-tight">
          <h1
            className="
              text-lg md:text-xl
              font-bold
              text-white
              dark:text-white
              light:text-gray-900
              cursor-pointer
            "
          >
            Shubha
          </h1>

          <p
            className="
              text-xs md:text-sm
              text-gray-400
              dark:text-gray-400
              light:text-gray-600
            "
          >
            Web Developer
          </p>
        </div>

      </div>


      {/* Desktop Navbar */}
      <div className="hidden md:block">

        <ul className="flex items-center gap-8">

          {navItems.map(({ id, text }) => (

            <li
              key={id}
              className="
                relative
                text-sm lg:text-base
                font-medium
                text-gray-300
                hover:text-blue-400
                cursor-pointer
                transition-colors
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
                <Link
                 to={text}
                 smooth={true}
                 duration={500}
                 offset={-70}
                 activeClass='active'
                >
                    {text}
                </Link>
            </li>

          ))}

        </ul>

      </div>


      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenu(!menu)}
        className="
          md:hidden
          p-2
          rounded-lg
          text-gray-300
          hover:text-white
          hover:bg-slate-800
          transition-all
          duration-300
        "
        aria-label="Toggle navigation menu"
      >
        {menu ? (
          <IoCloseSharp size={27} />
        ) : (
          <AiOutlineMenu size={27} />
        )}
      </button>

    </div>


    {/* Mobile Navbar */}
    {menu && (

      <div
        className="
          md:hidden
          absolute
          top-16
          left-0
          right-0
          min-h-[calc(100vh-4rem)]
          bg-slate-950
          border-t border-slate-800
          shadow-xl
        "
      >

        <ul
          className="
            flex
            flex-col
            items-center
            justify-center
            min-h-[calc(100vh-4rem)]
            gap-8
          "
        >

          {navItems.map(({ id, text }) => (

            <li
              key={id}
              onClick={() => setMenu(false)}
              className="
                text-xl
                font-semibold
                text-gray-300
                hover:text-blue-400
                hover:scale-105
                cursor-pointer
                transition-all
                duration-300
              "
            >
              <Link
                onClick={() => setMenu(false)}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
            >
                {text}
            </Link>
            </li>

          ))}

        </ul>

      </div>

    )}

  </div>
</div>
    </>
  )
}

export default Navbar