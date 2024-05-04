"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <>
      <header className="display flex pb-10 border-b-0.25 border-solid border-black">
        <Link href="/" className="mr-24">
          <img
            src="Logo_GO-I.jpg"
            alt="Logo van Grafisch Ontwerp en Illustratie"
            className="w-40 h-auto"
          />
        </Link>
        <nav className="display flex flex-row  items-center w-full">
          <ul className="display flex flex-row space-x-8">
            <li>
              <Link
                href="/"
                className={` text-black hover:font-bold ${
                  path === "/" ? "font-bold" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/over-het-atelier"
                className={` text-black hover:font-bold ${
                  path == "/over-het-atelier" ? "font-bold" : ""
                }`}
              >
                Over het atelier
              </Link>
            </li>
          </ul>
          <button
            className={`pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 ml-auto hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 ${
              path == "/login" ? "bg-slate-800 text-white border-slate-800" : ""
            }`}
          >
            <Link href="/login">Login</Link>
          </button>
        </nav>
      </header>
    </>
  );
};
export default Navigation;
