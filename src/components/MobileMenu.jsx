import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = ({ user, path, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (data?.user?.user_metadata?.role === "admin") {
        setIsAdmin(true);
      }
    };
    getUser();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md focus:outline-none lg:hidden">
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
                      href="/start"
                      className={`text-gray-800 ${
                        path === "/start" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Start
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/start/agenda"
                      className={`text-gray-800 ${
                        path === "/start/agenda" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Agenda
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/start/info"
                      className={`text-gray-800 ${
                        path === "/start/info" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Info
                    </Link>
                  </li>
                  <li className="py-2 border-b">
                    <Link
                      href="/start/cursussen"
                      className={`text-gray-800 ${
                        path === "/start/cursussen" ? "font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Cursus
                    </Link>
                  </li>
                  {!isAdmin && (
                    <li className="py-2 border-b">
                      <Link
                        href="/start/mijn-werk"
                        className={`text-gray-800 ${
                          path === "/start/mijn-werk" ? "font-bold" : ""
                        }`}
                        onClick={handleLinkClick}
                      >
                        Mijn werk
                      </Link>
                    </li>
                  )}
                  {isAdmin && (
                    <li className="py-2 border-b">
                      <Link
                        href="/start/werk-studenten"
                        className={`text-gray-800 ${
                          path === "/start/werk-studenten" ? "font-bold" : ""
                        }`}
                        onClick={handleLinkClick}
                      >
                        Werk studenten
                      </Link>
                    </li>
                  )}

                  <li className="py-2 border-b">
                    <Link
                      href="/start/showcases"
                      className={`text-gray-800 ${
                        path === "/start/showcases" ? "font-bold" : ""
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
