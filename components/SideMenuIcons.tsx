import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const SideMenuIcons = () => (
  <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
    <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
      <Link
        href="https://www.linkedin.com/in/moneeralromimah/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </Link>
    </div>
    <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
      <Link href="https://github.com/moneeroz" target="_blank" rel="noreferrer">
        <FaGithub />
      </Link>
    </div>
    <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
      <Link href="mailto:moneer.alromimah@gmail.com">
        <AiOutlineMail />
      </Link>
    </div>
    <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
      <Link href="/#contact">
        <BsFillPersonLinesFill />
      </Link>
    </div>
  </div>
);

export default SideMenuIcons;
