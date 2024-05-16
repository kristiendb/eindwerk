"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { logout } from "@/app/logout/actions";

const Navigation = () => {
  const path = usePathname();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = async () => {
    await logout(); // Call the logout function
    setUser(null); // Update the user state
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
          </ul>
          <div onClick={handleMenu} className="md:hidden ml-auto">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div
            className={
              !menu
                ? "md:hidden absolute top-[100px] right-0 bottom-0 transform translate-x-0 flex justify-center w-full h-screen bg-slate-300 text-white transition-transform duration-300 ease-in"
                : "md:hidden absolute top-[100px] right-0 bottom-0 transform translate-x-full flex justify-center w-full h-screen bg-slate-300 text-white transition-transform duration-300 ease-out"
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
                {/* {user ? (
                  <button
                    onClick={handleLogout}
                    className={`pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 ${
                      path == "/logout"
                        ? "bg-slate-800 text-white border-slate-800"
                        : ""
                    }`}
                  >
                    Logout
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
                      Login
                    </button>
                  </Link>
                )} */}
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
              </ul>
            </div>
          </div>
        </nav>
        {/* {user ? (
          <Link href="/login" className="hidden md:flex md:ml-auto">
            <button
              className={`pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 ${
                path == "/login"
                  ? "bg-slate-800 text-white border-slate-800"
                  : ""
              }`}
            >
              Log out
            </button>
          </Link>
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
        )} */}

        <Link href="/login" className="hidden md:flex md:ml-auto">
          <button
            className={`pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 ${
              path == "/login" ? "bg-slate-800 text-white border-slate-800" : ""
            }`}
          >
            Log in
          </button>
        </Link>
      </header>
    </>
  );
};
export default Navigation;
