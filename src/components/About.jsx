import React from 'react';
import aboutimg from './images/arvin.jpeg';

function About() {
  return (
    <div id='about' className='min-h-screen flex justify-center items-center bg-transparent px-4 sm:px-6 lg:px-8'>
      <section className="py-8 sm:py-12 md:py-16 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">

            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-xl w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-full">
                <img
                  src={aboutimg}
                  alt="Profile"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                I'm a passionate web developer with a Bachelor's degree in BSc CSIT (Computer Science and Information Technology). I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                My journey in tech began with a strong academic foundation in computer science, and over time, I’ve developed a keen interest in web development—crafting modern, responsive, and user-friendly applications.
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Responsive Design'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Download Button */}
              <div className="mt-6 sm:mt-8">
                <a
                  href="/path/to/cv.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-purple-500 hover:bg-purple-400 text-white text-sm sm:text-base font-medium rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
