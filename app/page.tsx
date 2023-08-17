import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651E5]">Moneer</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 m-auto max-w-[70%] text-gray-600">
            I've shifted from Chemical Engineering to become a full stack web
            developer, drawn by Software Development's evolving nature, complex
            challenges, and problem-solving opportunities. My commitment to
            continuous self-improvement is evident in my exploration of diverse
            subjects during leisure moments. This drive for growth is mirrored
            in both my expanding knowledge and my consistent progress in
            delivering higher quality work.
          </p>

          <div className="flex justify-between items-center max-w-[330px] m-auto py-4">
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="p-5 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
