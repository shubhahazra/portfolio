import React from 'react'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
     <div>

        {/* Top Border */}
        <hr className="border-gray-200 dark:border-slate-800" />

        <footer
            className="
            bg-white dark:bg-slate-950
            text-gray-700 dark:text-gray-300
            py-10 md:py-20
            transition-colors duration-300
            "
        >

            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

            <div className="flex flex-col items-center justify-center text-center">

                {/* Social Media Icons */}
                <div className="mb-6">
                <ul className="flex items-center justify-center gap-5">

                    {/* Facebook */}
                    <li>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full
                        bg-gray-100 dark:bg-slate-900
                        border border-gray-200 dark:border-slate-800
                        hover:bg-blue-50 dark:hover:bg-blue-950
                        hover:border-blue-500
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaSquareFacebook
                        className="
                            text-xl
                            text-gray-600 dark:text-gray-400
                            hover:text-blue-600 dark:hover:text-blue-400
                            transition-colors duration-300
                        "
                        />
                    </a>
                    </li>

                    {/* LinkedIn */}
                    <li>
                    <a
                        href="https://www.linkedin.com/in/shubha-hazra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full
                        bg-gray-100 dark:bg-slate-900
                        border border-gray-200 dark:border-slate-800
                        hover:bg-blue-50 dark:hover:bg-blue-950
                        hover:border-blue-500
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaLinkedin
                        className="
                            text-xl
                            text-gray-600 dark:text-gray-400
                            hover:text-blue-600 dark:hover:text-blue-400
                            transition-colors duration-300
                        "
                        />
                    </a>
                    </li>

                    {/* GitHub */}
                    <li>
                    <a
                        href="https://github.com/shubhahazra"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full
                        bg-gray-100 dark:bg-slate-900
                        border border-gray-200 dark:border-slate-800
                        hover:bg-gray-200 dark:hover:bg-slate-800
                        hover:border-gray-500
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaGithub
                        className="
                            text-xl
                            text-gray-600 dark:text-gray-400
                            hover:text-gray-900 dark:hover:text-white
                            transition-colors duration-300
                        "
                        />
                    </a>
                    </li>

                    {/* Telegram */}
                    <li>
                    <a
                        href="https://web.telegram.org/a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full
                        bg-gray-100 dark:bg-slate-900
                        border border-gray-200 dark:border-slate-800
                        hover:bg-blue-50 dark:hover:bg-blue-950
                        hover:border-blue-500
                        hover:-translate-y-1
                        transition-all duration-300
                        "
                    >
                        <FaTelegram
                        className="
                            text-xl
                            text-gray-600 dark:text-gray-400
                            hover:text-blue-500
                            transition-colors duration-300
                        "
                        />
                    </a>
                    </li>

                </ul>
                </div>


                {/* Divider */}
                <div className="w-full max-w-md border-t
                                border-gray-200 dark:border-slate-800
                                mb-6">
                </div>


                {/* Copyright */}
                <div className="space-y-2">

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    &copy; 2026 Shubha Hazra. All rights reserved.
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Developed with{" "}
                    <span className="text-red-500 animate-pulse">
                    ❤️
                    </span>{" "}
                    by{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                    Shubha
                    </span>
                </p>

                </div>

            </div>

            </div>

        </footer>
     </div>
    </>
  )
}

export default Footer