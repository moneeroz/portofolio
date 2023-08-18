import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinksData } from "@/lib/navLinksData";

const NavLinks = () => {
  const pathname = usePathname();
  const linkStyle =
    pathname !== "/" ? "text-white border-white" : "border-black";

  return (
    <ul className="hidden md:flex uppercase">
      {navLinksData.map((link) => (
        <Link href={link.href} key={link.name}>
          <li className={`ml-10 text-sm hover:border-b ${linkStyle}`}>
            {link.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
