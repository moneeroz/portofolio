import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { navLinksData } from "@/lib/navLinksData";
import logo from "@/public/assets/logo.png";
import { Dispatch, SetStateAction } from "react";
import SideMenuIcons from "./SideMenuIcons";

interface Props {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  handleShowMenu: () => void;
}

const MobileMenu = ({ showMenu, setShowMenu, handleShowMenu }: Props) => (
  <div
    className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e9eef1] p-6 ease-in duration-500 ${
      showMenu ? "" : "left-[-100%] ease-in duration-500"
    }`}
  >
    <div>
      <div className="w-full flex justify-between items-center ">
        <Link href="/">
          <Image src={logo} alt="website logo" width={90} />
        </Link>
        <div
          onClick={handleShowMenu}
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
      <ul className="uppercase" onClick={() => setShowMenu(false)}>
        {navLinksData.map((link) => (
          <Link href={link.href} key={link.name}>
            <li className="py-4 text-sm">{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className="pt-40">
        <p className="uppercase tracking-widest text-[#5651E5]">
          Let&apos;s Connect
        </p>
        <SideMenuIcons />
      </div>
    </div>
  </div>
);

export default MobileMenu;
