"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutClient } from "@/app/logout/actions";
import { useUser } from "@/utils/supabase/client";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const path = usePathname();
  const user = useUser();

  const handleLogout = async () => {
    await logoutClient();
  };

  return (
    <>
      <header className="flex pb-10 border-b-0.25 border-solid border-black items-center justify-between">
        <Link href="/" className="md:mr-24 mr-8">
          <img
            src="Logo_GO-I.jpg"
            alt="Logo van Grafisch Ontwerp en Illustratie"
            className="w-40 h-auto"
          />
        </Link>
        <nav className="flex flex-row">
          <ul className="md:flex md:flex-row md:space-x-8 hidden md:items-center">
            <li>
              <Link
                href="/"
                className={`text-black hover:font-bold ${
                  path === "/" ? "font-bold" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/over-het-atelier"
                className={`text-black hover:font-bold ${
                  path === "/over-het-atelier" ? "font-bold" : ""
                }`}
              >
                Over het atelier
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href="/home"
                  className={`text-black hover:font-bold ${
                    path === "/home" ? "font-bold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
            )}
          </ul>
          <div className="md:hidden">
            <MobileMenu user={user} path={path} handleLogout={handleLogout} />
          </div>
        </nav>
        {user ? (
          <button
            className="pt-2 pb-2 pl-7 pr-7 hidden md:flex md:ml-auto text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700"
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <Link href="/login" className="hidden md:flex md:ml-auto">
            <button
              className={`pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 ${
                path === "/login"
                  ? "bg-slate-800 text-white border-slate-800"
                  : ""
              }`}
            >
              Log in
            </button>
          </Link>
        )}
      </header>
    </>
  );
};

export default Navigation;
