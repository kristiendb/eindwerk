"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Courses from "./Courses";

const SideNavigation = ({ isAdmin }) => {
  const path = usePathname();
  const [showSublist, setShowSublist] = useState(false);

  const handleSublist = (e) => {
    e.preventDefault();
    setShowSublist(!showSublist);
  };
  return (
    <>
      <nav className="border-r-0.25 border-black w-52 h-screen">
        <ul className="display flex flex-col space-y-4 text-sm pt-6 pb-6  border-b-0.25  border-black">
          <li>
            <Link
              href="/start"
              className={` text-black hover:font-bold ${
                path === "/start" ? "font-bold" : ""
              }`}
            >
              START
            </Link>
          </li>
          <li>
            <Link
              href="/start/agenda"
              className={` text-black hover:font-bold ${
                path === "/start/agenda" ? "font-bold" : ""
              }`}
            >
              AGENDA
            </Link>
          </li>
          <li>
            <Link
              href="/start/info"
              className={` text-black hover:font-bold ${
                path === "/start/info" ? "font-bold" : ""
              }`}
            >
              INFO
            </Link>
          </li>
          <li>
            <div onClick={handleSublist}>
              <Link
                href="/start/cursussen"
                className={` text-black hover:font-bold ${
                  path === "/start/cursussen" ? "font-bold" : ""
                }`}
              >
                CURSUS
              </Link>
            </div>
            {showSublist && (
              <ul>
                <Courses />
              </ul>
            )}
          </li>
          {!isAdmin && (
            <li>
              <Link
                href="/start/mijn-werk"
                className={` text-black hover:font-bold ${
                  path === "/start/mijn-werk" ? "font-bold" : ""
                }`}
              >
                MIJN WERK
              </Link>
            </li>
          )}
          {isAdmin && (
            <li>
              <Link
                href="/start/werk-studenten"
                className={` text-black hover:font-bold ${
                  path === "/start/werk-studenten" ? "font-bold" : ""
                }`}
              >
                WERK STUDENTEN
              </Link>
            </li>
          )}
          <li>
            <Link
              href="/start/showcases"
              className={` text-black hover:font-bold ${
                path === "/start/showcases" ? "font-bold" : ""
              }`}
            >
              SHOWCASES
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default SideNavigation;
