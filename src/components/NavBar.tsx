import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="w-fit mx-auto my-4 px-4 py-2 border rounded-full shadow-lg flex gap-4 justify-between ">
      <Link href={"/"}>
        <FaHouseChimney className="text-2xl text-slate-500" />
      </Link>
      <Link href={"/projects"}>
        <FaBook className="text-2xl text-slate-500" />
      </Link>
    </nav>
  );
};

export default NavBar;
