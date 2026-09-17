import axios from 'axios';
import React from 'react'
import { useForm, } from "react-hook-form"
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append(
      "fi-sender-email",
      data["fi-sender-email"]
    );
    formData.append(
      "fi-sender-fullName",
      data["fi-sender-fullName"]
    );
    formData.append(
      "fi-text-message",
      data["fi-text-message"]
    );
    formData.append(
      "fi-text-subject",
      data["fi-text-subject"]
    );

    
    try {
      await axios.post("https://forminit.com/f/0h7vov0v5d7",
         formData
      );

      toast.success("Message seand successfully.");

      reset();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong")
    }
  }
  

    return (
    <div name="Contact"
      className="
        min-h-screen
        bg-white dark:bg-slate-950
        text-gray-800 dark:text-white
        transition-colors duration-300
        pt-28 pb-20
      "
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="
            text-sm font-semibold uppercase tracking-widest
            text-blue-600 dark:text-blue-400
          ">
            Get In Touch
          </span>

          <h1 className="
            text-3xl md:text-5xl font-bold mt-3
            text-gray-900 dark:text-white
          ">
            Contact{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Me
            </span>
          </h1>

          <p className="
            max-w-2xl mx-auto mt-5
            text-sm md:text-base leading-7
            text-gray-600 dark:text-gray-400
          ">
            Have a question, project idea, or just want to say hello?
            Feel free to reach out. I would love to hear from you
            and discuss how we can work together.
          </p>

        </div>


        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Side - Information */}
          <div className="
            rounded-2xl p-6 md:p-10
            bg-gray-50 dark:bg-slate-900
            border border-gray-200 dark:border-slate-800
            shadow-md dark:shadow-black/20
          ">

            <h2 className="
              text-2xl md:text-3xl font-bold
              text-gray-900 dark:text-white
            ">
              Let's Talk
            </h2>

            <p className="
              mt-4 leading-7
              text-gray-600 dark:text-gray-400
            ">
              I'm always open to discussing new projects,
              creative ideas, or opportunities to be part
              of your vision.
            </p>


            {/* Email */}
            <div className="
              flex items-start gap-4 mt-8
              p-4 rounded-xl
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-700
              hover:border-blue-500
              transition-all duration-300
            ">

              <div className="
                flex items-center justify-center
                w-12 h-12 shrink-0
                rounded-full
                bg-blue-100 dark:bg-blue-950
                text-blue-600 dark:text-blue-400
              ">
                <span className="text-xl">✉</span>
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>

                <a
                  href="mailto:your-email@example.com"
                  className="
                    text-sm break-all
                    text-gray-600 dark:text-gray-400
                    hover:text-blue-600 dark:hover:text-blue-400
                  "
                >
                  mhazra397@gmail.com
                </a>
              </div>

            </div>


            {/* Phone */}
            <div className="
              flex items-start gap-4 mt-4
              p-4 rounded-xl
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-700
              hover:border-blue-500
              transition-all duration-300
            ">

              <div className="
                flex items-center justify-center
                w-12 h-12 shrink-0
                rounded-full
                bg-blue-100 dark:bg-blue-950
                text-blue-600 dark:text-blue-400
              ">
                <span className="text-xl">☎</span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +91 7063646428
                </p>
              </div>

            </div>


            {/* Location */}
            <div className="
              flex items-start gap-4 mt-4
              p-4 rounded-xl
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-700
              hover:border-blue-500
              transition-all duration-300
            ">

              <div className="
                flex items-center justify-center
                w-12 h-12 shrink-0
                rounded-full
                bg-blue-100 dark:bg-blue-950
                text-blue-600 dark:text-blue-400
              ">
                <span className="text-xl">📍</span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Location
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Midnapore, West Bengal, India
                </p>
              </div>

            </div>


            {/* Bottom Message */}
            <div className="
              mt-8 pt-6
              border-t border-gray-200 dark:border-slate-700
            ">

              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                I am currently focused on building full-stack web
                applications and exploring new opportunities
                in software development.
              </p>

            </div>

          </div>


          {/* Right Side - Contact Form */}
          <div className="
            rounded-2xl p-6 md:p-10
            bg-white dark:bg-slate-900
            border border-gray-200 dark:border-slate-800
            shadow-md dark:shadow-black/20
          ">

            <h2 className="
              text-2xl md:text-3xl font-bold
              text-gray-900 dark:text-white
            ">
              Send Me a Message
            </h2>

            <p className="
              mt-3 text-sm leading-6
              text-gray-600 dark:text-gray-400
            ">
              Fill out the form below and I will get back to you
              as soon as possible.
            </p>


            <form
              onSubmit={handleSubmit(onSubmit)}
              // action='https://forminit.com/f/0h7vov0v5d7'
              // method='POST'
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    block text-sm font-semibold mb-2
                    text-gray-700 dark:text-gray-300
                  "
                >
                  Your Name
                </label>

                <input
                {...register("fi-sender-fullName", { required: true })}
                  id="name"
                  type="text"
                  name="fi-sender-fullName"
                  placeholder="Enter your name"
                  className="
                    w-full rounded-lg px-4 py-3
                    bg-gray-50 dark:bg-slate-800
                    border border-gray-300 dark:border-slate-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition-all duration-300
                  "
                />
                {errors["fi-sender-fullName"] && <span className='text-red-500'>This field is required</span>}
              </div>


              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    block text-sm font-semibold mb-2
                    text-gray-700 dark:text-gray-300
                  "
                >
                  Email Address
                </label>

                <input
                {...register("fi-sender-email", { required: true })}
                  id="email"
                  type="email"
                  name="fi-sender-email"
                  placeholder="Enter your email"
                  className="
                    w-full rounded-lg px-4 py-3
                    bg-gray-50 dark:bg-slate-800
                    border border-gray-300 dark:border-slate-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition-all duration-300
                  "
                />
                {errors["fi-sender-email"] && <span className='text-red-500'>This field is required</span>}
              </div>


              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="
                    block text-sm font-semibold mb-2
                    text-gray-700 dark:text-gray-300
                  "
                >
                  Subject
                </label>

                <input
                {...register("fi-text-subject", { required: true })}
                  id="subject"
                  type="text"
                  name="fi-text-subject"
                  placeholder="Enter subject"
                  className="
                    w-full rounded-lg px-4 py-3
                    bg-gray-50 dark:bg-slate-800
                    border border-gray-300 dark:border-slate-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    outline-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition-all duration-300
                  "
                />
                {errors["fi-text-subject"] && <span className='text-red-500'>This field is required</span>}
              </div>


              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    block text-sm font-semibold mb-2
                    text-gray-700 dark:text-gray-300
                  "
                >
                  Message
                </label>

                <textarea
                {...register("fi-text-message", { required: true })}
                  id="message"
                  name="fi-text-message"
                  placeholder="Write your message..."
                  rows="5"
                  className="
                    w-full rounded-lg px-4 py-3
                    bg-gray-50 dark:bg-slate-800
                    border border-gray-300 dark:border-slate-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    outline-none resize-none
                    focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500
                    transition-all duration-300
                  "
                />
                {errors["fi-text-message"] && <span className='text-red-500'>This field is required</span>}
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full rounded-lg
                  bg-blue-600 hover:bg-blue-700
                  text-white font-semibold
                  py-3.5
                  shadow-md shadow-blue-500/20
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact