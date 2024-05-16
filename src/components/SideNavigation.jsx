"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNavigation = () => {
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
              href="/home"
              className={` text-black hover:font-bold ${
                path === "/home" ? "font-bold" : ""
              }`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/home/agenda"
              className={` text-black hover:font-bold ${
                path === "/home/agenda" ? "font-bold" : ""
              }`}
            >
              AGENDA
            </Link>
          </li>
          <li>
            <Link
              href="/home/info"
              className={` text-black hover:font-bold ${
                path === "/home/info" ? "font-bold" : ""
              }`}
            >
              INFO
            </Link>
          </li>
          <li>
            <div onClick={handleSublist}>
              <Link
                href="/home/cursus"
                className={` text-black hover:font-bold ${
                  path === "/home/cursus" ? "font-bold" : ""
                }`}
              >
                CURSUS
              </Link>
            </div>
            {showSublist && (
              <ul>
                <li className="p-2">
                  <Link
                    href="/home/cursus/typografie"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/typografie" ? "font-bold" : ""
                    }`}
                  >
                    Typografie & lettering
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/layout"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/layout" ? "font-bold" : ""
                    }`}
                  >
                    Lay-out & compositie
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/communicatie"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/communicatie" ? "font-bold" : ""
                    }`}
                  >
                    Communicatie
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/concept"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/concept" ? "font-bold" : ""
                    }`}
                  >
                    Concept
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/kleur"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/kleur" ? "font-bold" : ""
                    }`}
                  >
                    Kleur
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/beelden"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/beelden" ? "font-bold" : ""
                    }`}
                  >
                    Beelden
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/productie"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/productie" ? "font-bold" : ""
                    }`}
                  >
                    Productie
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    href="/home/cursus/creativiteit"
                    className={` text-black hover:font-bold ${
                      path === "/home/cursus/creativiteit" ? "font-bold" : ""
                    }`}
                  >
                    Creativiteit
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/home/mijn-werk"
              className={` text-black hover:font-bold ${
                path === "/home/mijn-werk" ? "font-bold" : ""
              }`}
            >
              MIJN WERK
            </Link>
          </li>
          <li>
            <Link
              href="/home/showcases"
              className={` text-black hover:font-bold ${
                path === "/home/showcases" ? "font-bold" : ""
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
