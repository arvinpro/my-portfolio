import React from "react";
import ParticlesComponent from "./Particles";
import Header from "./Header";
import bg from "./images/deafult.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord, FaHandMiddleFinger } from "react-icons/fa6";
import  {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { Link as ScrollLink } from 'react-scroll';

function Hero() {
  
useGSAP(()=>{
  let tl = gsap.timeline();

 

})

  return (
    <div id="home" className="relative min-h-screen w-full border-3 border-transparent shadow-2xl rounded-4xl">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      <div className="relative z-10 text-white h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-6 md:px-10 py-20 lg:py-0">
        <div id="text" className="w-full lg:w-auto text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-alum text-xl sm:text-2xl">HELLO  <span className="text-purple-500 ">WELCOME !</span></h1>
          <h1 className="font-anton text-3xl sm:text-4xl md:text-5xl mt-2">I'M ARVIN <span className="text-purple-500">MAHATO</span></h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">MERN STACK DEVELOPER</h1>
          <h1 className="max-w-lg mx-auto lg:mx-0 mt-4 text-sm sm:text-xl">
            Crafting Inovative Softwares With MERN Technologies.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 my-6">
           <ScrollLink 
            to="contact"       
            smooth={true}
            duration={500}
           offset={-70} 
           >
             <button className="cursor-pointer rounded-xl px-10 py-2 bg-purple-500 text-white hover:opacity-90 transition">
              HIRE ME
            </button>
           </ScrollLink>
           <ScrollLink  
           to="skills"       
            smooth={true}
            duration={500}
           offset={-70} >
             <button className="cursor-pointer rounded-xl px-9 py-2 border border-purple-500 hover:bg-purple-500 transition">
              My Skills
            </button>
           </ScrollLink>
          </div>

        
<div id="txt" className="txt-scroll flex flex-wrap justify-center sm:justify-start gap-4 mt-6 cursor-pointer">
  {[FaFacebook, FaInstagram, FaLinkedin, FaDiscord, FaGithub].map((Icon, index) => (
    <div
      key={index}
      className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-purple-500 hover:scale-110 transition duration-300"
    >
      <Icon className="text-lg sm:text-xl" />
    </div>
  ))}
</div>
        </div>


        {/* Image wrapper with responsive styling */}
        <div className="img-scroll relative w-48 h-48 sm:w-64  sm:h-64 md:w-80 md:h-80 lg:w-auto lg:h-screen lg:mr-0 fade-shadow-right fade-left">
          <img 
            id='img' 
            src={bg} 
            alt="Profile" 
            className="h-full w-full object-cover rounded-full lg:rounded-none border-4 lg:border-0 border-purple-500/50 shadow-lg lg:shadow-none" 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;