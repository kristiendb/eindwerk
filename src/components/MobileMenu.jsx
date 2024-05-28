import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = ({ user, path, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md focus:outline-none md:hidden">
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
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full p-0">
        <SheetHeader className="p-0">
          <nav>
            <ul className="flex flex-col p-4 text-2xl">
              <li className="py-2 border-b mt-6">
                <Link
                  href="/"
                  className={`text-gray-800 ${path === "/" ? "font-bold" : ""}`}
                  onClick={handleLinkClick}
                >
                  Portfolio
                </Link>
              </li>
              <li className="py-2 border-b">
                <Link
                  href="/over-het-atelier"
                  className={`text-gray-800 ${
                    path === "/over-het-atelier" ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Over het atelier
                </Link>
              </li>
              {user && (
                <>
                  <li className="py-2 border-b">
                    <Link
                      href="/home"
                      className={`text-gray-800 ${
                        path === "/home" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/home/agenda"
                      className={`text-gray-800 ${
                        path === "/home/agenda" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Agenda
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/home/info"
                      className={`text-gray-800 ${
                        path === "/home/info" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Info
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/home/cursus"
                      className={`text-gray-800 ${
                        path === "/home/cursus" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Cursus
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/home/mijn-werk"
                      className={`text-gray-800 ${
                        path === "/home/mijn-werk" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Mijn werk
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/home/showcases"
                      className={`text-gray-800 ${
                        path === "/home/showcases" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Showcases
                    </Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="cursor-pointer py-2 border-b text-gray-800"
                  >
                    Logout
                  </li>
                </>
              )}
              {!user && (
                <li className="py-2 border-b">
                  <Link
                    href="/login"
                    className={`text-gray-800 ${
                      path === "/login" ? "font-bold" : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
