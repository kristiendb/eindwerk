"use client";

import Breadcrumb from "@/components/BreadCrumb";
import ChapterNavigation from "@/components/ChapterNavigation";
import { useParams } from "next/navigation";

const Layout = ({ children }) => {
  const { slug, levelSlug, chapterSlug } = useParams();
  return (
    <>
      <div className="md:ml-12 md:mr-9 lg:mr-12">
        <div>
          <Breadcrumb />
        </div>
        <ChapterNavigation
          slug={slug}
          levelSlug={levelSlug}
          chapterSlug={chapterSlug}
        />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
