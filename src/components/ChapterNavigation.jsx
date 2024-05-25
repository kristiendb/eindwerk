"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ChapterNavigation = ({ slug, levelSlug, chapterSlug }) => {
  const path = usePathname();
  return (
    <>
      <nav className="mt-8 pb-3 border-b-0.25 border-black">
        <ul className="flex space-x-10 text-sm">
          <li>
            <Link
              href={`/home/cursus/${slug}/${levelSlug}/${chapterSlug}/inleiding`}
              className={` text-black hover:font-bold ${
                path ===
                `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/inleiding`
                  ? "font-bold"
                  : ""
              }`}
            >
              INLEIDING
            </Link>
          </li>
          <li>
            <Link
              href={`/home/cursus/${slug}/${levelSlug}/${chapterSlug}/theorie`}
              className={` text-black hover:font-bold ${
                path ===
                `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/theorie`
                  ? "font-bold"
                  : ""
              }`}
            >
              THEORIE
            </Link>
          </li>
          <li>
            <Link
              href={`/home/cursus/${slug}/${levelSlug}/${chapterSlug}/oefeningen`}
              className={` text-black hover:font-bold ${
                path ===
                `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/oefeningen`
                  ? "font-bold"
                  : ""
              }`}
            >
              OEFENINGEN
            </Link>
          </li>
          <li>
            <Link
              href={`/home/cursus/${slug}/${levelSlug}/${chapterSlug}/opdrachten`}
              className={` text-black hover:font-bold ${
                path ===
                `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/opdrachten`
                  ? "font-bold"
                  : ""
              }`}
            >
              OPDRACHTEN
            </Link>
          </li>
          <li>
            <Link
              href={`/home/cursus/${slug}/${levelSlug}/${chapterSlug}/voorbeelden`}
              className={` text-black hover:font-bold ${
                path ===
                `/home/cursus/${slug}/${levelSlug}/${chapterSlug}/voorbeelden`
                  ? "font-bold"
                  : ""
              }`}
            >
              VOORBEELDEN
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ChapterNavigation;
