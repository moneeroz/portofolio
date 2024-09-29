import React from "react";
import HeroSocialIcons from "./HeroSocialIcons";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="about"
      className="max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center"
    >
      <div>
        <p className="uppercase text-sm tracking-widest text-gray-600">
          let&apos;s build something together
        </p>
        <h1 className="py-4 text-gray-700">
          Hi, I&apos;m <span className="text-[#5651E5]">Moneer</span>
        </h1>
        <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
        <p className="py-4 m-auto max-w-[70%] text-gray-600">
          I transitioned from Chemical Engineering to pursue a career as a full
          stack web developer. I was captivated by the ever-changing landscape
          of Software Development, the intricate problems it presents, and the
          chance to engage in creative solutions. I am deeply committed to
          constantly bettering myself, which is evident in how I immerse myself
          in various subjects during my free time.
        </p>

        <HeroSocialIcons />

        <Link href="/#projects">
          <p className="my-4 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
