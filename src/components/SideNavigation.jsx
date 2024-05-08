"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavigation = () => {
  const path = usePathname();
  return (
    <>
      <div className="border-r-0.25 border-black w-52 h-screen">
        <ul className="display flex flex-col space-y-4 text-sm pt-6 pb-6  border-b-0.25  border-black">
          <li>HOME</li>
          <li>AGENDA</li>
          <li>INFO</li>
          <li>CURSUS</li>
          <li>MIJN WERK</li>
          <li>SHOWCASES</li>
        </ul>
      </div>
    </>
  );
};
export default SideNavigation;
