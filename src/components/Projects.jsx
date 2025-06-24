import React from 'react';
import { Github } from 'lucide-react';

// Image imports
import hotel from './images/hotel.png'
import amazon from './images/amazon.png'
import currency from './images/currency.png'
import game from './images/game.png'
import pathau from './images/pathau.png'
import pass from './images/pass.png'

const projects = [
  {
    title: "E-commerce",
    description: "A ReactJS made Resturant Web App using React Routing, ReduxToolkit, Tailwind CSS & GSAP animation",
    liveLink: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
    image: hotel,
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A Tic Tac Toe Game built with fully Javascript Code with pure css.",
    liveLink: "https://your-store-link.com",
    github: "https://github.com/yourusername/ecommerce-store",
    image: game,
  },
  {
    title: "Pathau Clone",
    description: "A Pathau online drive book frontend project made with HTML & CSS.",
    liveLink: "https://your-weather-app.com",
    github: "https://github.com/yourusername/weather-app",
    image: pathau,
  },
  {
    title: "Password Generator",
    description: "A real-time Password Generator built with React Js, ReduxToolkit & Tailwind CSS.",
    liveLink: "https://your-chat-app.com",
    github: "https://github.com/yourusername/chat-app",
    image: pass,
  },
  {
    title: "Currency Converter",
    description: "Currency Converter Buit with React JS technology including APIs & ReduxToolkit with Pure Tailwind CSS",
    liveLink: "https://your-task-app.com",
    github: "https://github.com/yourusername/task-manager",
    image: currency,
  },
  {
    title: "Amazone Clone",
    description: "Amazone Clone made with pure HTML & CSS",
    liveLink: "https://your-blog-platform.com",
    github: "https://github.com/yourusername/blog-platform",
    image: amazon,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          My <span className='text-purple-400'>Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-shadow transform hover:scale-[1.02] p-4 w-full max-w-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                >
                  Visit
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition flex items-center"
                >
                  <Github className="mr-1 w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
