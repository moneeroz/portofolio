"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleshowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-50 backdrop-blur-md"
          : "fixed w-full h-20 z-50 backdrop-blur-md"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="website logo" width={125} height={50} />
        </Link>
        <div className="">
          <NavLinks />
          <div onClick={handleshowMenu} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleShowMenu={handleshowMenu}
      />
    </header>
  );
};

export default Navbar;
