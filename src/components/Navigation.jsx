"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logoutClient } from "@/app/logout/actions";
import { useUser } from "@/utils/supabase/client";

const Navigation = () => {
  const path = usePathname();
  const [menu, setMenu] = useState(false); // menu state set to false by default
  const user = useUser();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = async () => {
    await logoutClient();
  };

  return (
    <>
      <header className="display flex pb-10 border-b-0.25 border-solid border-black items-center justify-between">
        <Link href="/" className="md:mr-24 mr-8">
          <img
            src="Logo_GO-I.jpg"
            alt="Logo van Grafisch Ontwerp en Illustratie"
            className="w-40 h-auto "
          />
        </Link>
        <nav className="display flex flex-row">
          <ul className="md:display md:flex md:flex-row md:space-x-8 hidden md:items-center">
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
            {user && (
              <li>
                <Link
                  href="/home"
                  className={` text-black hover:font-bold ${
                    path == "/home" ? "font-bold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
            )}
          </ul>
          <div onClick={handleMenu} className="md:hidden ml-auto ">
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          <div
            className={
              menu
                ? "md:hidden absolute top-[100px] right-0 bottom-0 w-full h-screen bg-slate-300 text-white transition-transform duration-300 ease-in z-10"
                : "md:hidden absolute top-[100px] right-0 bottom-0 w-full h-screen bg-slate-300 text-white transform translate-x-full transition-transform duration-300 ease-out z-10"
            }
          >
            <div className="w-full">
              <ul className="mt-10 text-xl ml-6 mr-6">
                <li
                  onClick={handleMenu}
                  className="border-b-0.25 border-solid border-black pb-6"
                >
                  <Link
                    href="/"
                    className={` text-black hover:font-bold pl-4 ${
                      path === "/" ? "font-bold" : ""
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li
                  onClick={handleMenu}
                  className="border-b-0.25 border-solid border-black pt-6 pb-6"
                >
                  <Link
                    href="/over-het-atelier"
                    className={` text-black hover:font-bold pl-4 ${
                      path == "/over-het-atelier" ? "font-bold" : ""
                    }`}
                  >
                    Over het atelier
                  </Link>
                </li>

                {user ? (
                  <>
                    <li
                      onClick={handleMenu}
                      className="border-b-0.25 border-solid border-black pt-6 pb-6"
                    >
                      <Link
                        href="/home"
                        className={` text-black hover:font-bold pl-4 ${
                          path == "/home" ? "font-bold" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      onClick={handleMenu}
                      className="border-b-0.25 border-solid border-black pt-6 pb-6"
                    >
                      <Link
                        href="/home/agenda"
                        className={` text-black hover:font-bold pl-4 ${
                          path == "/home/agenda" ? "font-bold" : ""
                        }`}
                      >
                        Agenda
                      </Link>
                    </li>
                    <li
                      onClick={handleMenu}
                      className="border-b-0.25 border-solid border-black pt-6 pb-6"
                    >
                      <Link
                        href="/home/info"
                        className={` text-black hover:font-bold pl-4 ${
                          path == "/home/info" ? "font-bold" : ""
                        }`}
                      >
                        Info
                      </Link>
                    </li>
                    <li
                      onClick={handleMenu}
                      className="border-b-0.25 border-solid border-black pt-6 pb-6"
                    >
                      <Link
                        href="/home/cursus"
                        className={` text-black hover:font-bold pl-4 ${
                          path == "/home/cursus" ? "font-bold" : ""
                        }`}
                      >
                        Cursus
                      </Link>
                    </li>
                    <li
                      onClick={handleMenu}
                      className="border-b-0.25 border-solid border-black pt-6 pb-6"
                    >
                      <Link
                        href="/home/mijn-werk"
                        className={` text-black hover:font-bold pl-4 ${
                          path == "/home/mijn-werk" ? "font-bold" : ""
                        }`}
                      >
                        Mijn werk
                      </Link>
                    </li>
                    <li
                      onClick={handleMenu}
                      className="border-b-0.25 border-solid border-black pt-6 pb-6"
                    >
                      <Link
                        href="/home/showcases"
                        className={` text-black hover:font-bold pl-4 ${
                          path == "/home/showcases" ? "font-bold" : ""
                        }`}
                      >
                        Showcases
                      </Link>
                    </li>
                    <li
                      onClick={handleLogout}
                      className="cursor-pointer border-b-0.25 border-solid border-black pt-6 pb-6 text-black hover:font-bold pl-4"
                    >
                      Logout
                    </li>
                  </>
                ) : (
                  <li
                    onClick={handleMenu}
                    className="border-b-0.25 border-solid border-black pt-6 pb-6"
                  >
                    <Link
                      href="/login"
                      className={` text-black hover:font-bold pl-4 ${
                        path == "/login" ? "font-bold" : ""
                      }`}
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        {user ? (
          <button
            className={`pt-2 pb-2 pl-7 pr-7 hidden md:flex md:ml-auto text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 `}
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <Link href="/login" className="hidden md:flex md:ml-auto">
            <button
              className={`pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 ${
                path == "/login"
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
