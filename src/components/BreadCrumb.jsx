import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = () => {
  const { slug, levelSlug, chapterSlug } = useParams();
  const supabase = createClient();
  const [chapter, setChapter] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        // Fetch the course based on the course slug
        let { data: courseData, error: courseError } = await supabase
          .from("courses")
          .select("id, title")
          .eq("slug", slug)
          .single();

        if (courseError) {
          throw courseError;
        }

        setCourseTitle(courseData.title);

        // Fetch the level based on the level slug
        let { data: levelData, error: levelError } = await supabase
          .from("level")
          .select("id")
          .ilike("name", levelSlug)
          .single();

        if (levelError) {
          throw levelError;
        }

        // Fetch the chapter based on the course id, level id, and chapter title
        let { data: chapterData, error: chapterError } = await supabase
          .from("chapters")
          .select("id, title, description")
          .eq("courses_idcourses", courseData.id)
          .eq("level_idlevel", levelData.id)
          .ilike("title", chapterSlug) // assuming chapterSlug corresponds to chapter title
          .single();

        if (chapterError) {
          throw chapterError;
        }

        setChapter(chapterData);
      } catch (error) {
        console.error("Error fetching chapter data:", error);
      }
    };

    fetchChapter();
  }, [slug, levelSlug, chapterSlug, supabase]);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home/cursus">Cursus</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/home/cursus/${slug}`}>
              {courseTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {chapter?.title} {levelSlug}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};
export default BreadCrumb;
