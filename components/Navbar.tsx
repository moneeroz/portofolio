"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const handleCLoseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <header className="fixed w-full h-20 shadow-xl z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={logo} alt="website logo" width={125} height={50} />
        <div>
          <ul className="hidden md:flex uppercase">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b border-black">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b border-black">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b border-black">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b border-black">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b border-black">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleCLoseMenu} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          closeMenu
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50"
            : ""
        }
      >
        <div
          className={
            closeMenu
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e9eef1] p-6 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-500"
          }
        >
          <div>
            <div className="w-full flex justify-between items-center ">
              <Image src={logo} alt="website logo" width={90} />
              <div
                onClick={handleCLoseMenu}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                let&apos;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651E5]">
                Let&apos;s Connect
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="p-3 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
