import React from 'react'

const About = () => {
  return (
    <>
     <div name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20
                bg-white dark:bg-slate-950
                text-gray-800 dark:text-gray-200
                transition-colors duration-300">

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl font-bold mb-6
                 text-gray-900 dark:text-white">
    About{" "}
    <span className="text-blue-600 dark:text-blue-400">
      Me
    </span>
  </h1>

  {/* Introduction */}
  <p className="text-base md:text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-4xl">
    Hello, I'm Shubha Hazra, a BCA student and MERN Stack Developer passionate about building modern, 
    responsive, and user-friendly web applications. I enjoy turning ideas into functional applications 
    using technologies such as MongoDB, Express.js, React.js, and Node.js.
    <br />
    <br />
    I also have a strong interest in Java, JavaScript, SQL, and backend development. 
    I enjoy solving programming problems, learning new technologies, and improving my 
    development skills by building real-world projects.
  </p>

  {/* Sections */}
  <div className="mt-10 space-y-8">

    <section>
      <h2 className="text-xl font-semibold mb-3
                     text-blue-600 dark:text-blue-400">
        Education
      </h2>

        <ul className="leading-7 text-gray-600 dark:text-gray-400">
          <li><b>Bachelor of Computer Applications (BCA)</b></li>
          <li>Midnapore City College under Vidyasagar University</li>
          <li>Expected Graduation: <b>2027</b></li>
        </ul>
        <br />
      <p className="leading-7 text-gray-600 dark:text-gray-400">
        Currently pursuing a Bachelor of Computer Applications with a focus on software development, 
        web technologies, programming, databases, and modern application development.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3
                     text-blue-600 dark:text-blue-400">
        Skills & Expertise
      </h2>

      <p className="leading-7 text-gray-600 dark:text-gray-400 pl-4">
        <li><b>Frontend: </b>HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
      </p>
      <p className="leading-7 text-gray-600 dark:text-gray-400 pl-4">
        <li><b>Backend: </b>Node.js, Express.js, REST APIs</li>
      </p>
      <p className="leading-7 text-gray-600 dark:text-gray-400 pl-4">
        <li><b>Database: </b>MongoDB, SQL</li>
      </p>
      <p className="leading-7 text-gray-600 dark:text-gray-400 pl-4">
        <li><b>Programming Language: </b>Java, JavaScript, Python, C</li>
      </p>
      <p className="leading-7 text-gray-600 dark:text-gray-400 pl-4">
        <li><b>Tools: </b>Git, GitHub, VS Code, Postman</li>
      </p>
      <p className="leading-7 text-gray-600 dark:text-gray-400 pl-4">
        <li><b>Concepts: </b>CRUD, Authentication, API Integration, Responsive Design, JWT</li>
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3
                     text-blue-600 dark:text-blue-400">
        Professional Experience
      </h2>

      <p className="leading-7 text-gray-600 dark:text-gray-400">
        Currently focused on building practical projects and developing industry-ready skills through hands-on learning.
        <br />
        <br />
        I have worked on full-stack web applications involving authentication, CRUD operations, REST APIs, 
        database management, image uploads, and responsive user interfaces.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3
                     text-blue-600 dark:text-blue-400">
        Mission Statement
      </h2>

      <p className="leading-7 text-gray-600 dark:text-gray-400">
        My goal is to become a skilled full-stack developer who can build 
        reliable, scalable, and user-friendly applications. I believe in 
        continuous learning, practical development, and taking on new challenges 
        to grow as a software developer.
      </p>
    </section>

  </div>
</div>
    </>
  )
}

export default About