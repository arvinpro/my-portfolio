import React from "react";
import ParticlesComponent from "./Particles";
import Header from "./Header";
import bg from "./images/deafult.png";

function Hero() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white h-full flex flex-col  md:flex-row items-center justify-between md:justify-between px-6 md:px-10 text-center md:text-left">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl">I AM DEVELOPER</h1>
          <h1 className="text-4xl font-bold">HIRE ME FOR ANY PROJECTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            corrupti, neque voluptate vel ut maxime modi sunt illum
            reprehenderit suscipit esse dolores, voluptas eligendi eum ipsum?
            Ipsam perferendis dicta veniam.
          </p>
        </div>

        {/* Image: shown only on large screens */}
        <div className="hidden lg:block relative h-screen w-auto fade-shadow-right">
          <img
            id="img"
            src={bg}
            alt="..."
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
