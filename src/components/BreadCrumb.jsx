"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { selectCoursesById } from "@/functions/queries";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = () => {
  const supabase = createClient();
  const params = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const [id] = params.cursus.split("-");
      const courseData = await selectCoursesById(supabase, id);
      setCourse(courseData[0]);
    };

    fetchCourse();
  }, [params.cursus]);
  const hoofdstukParts = params.hoofdstuk?.split("-").slice(1).join(" ");

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/start/cursussen">Cursus</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {course && (
            <BreadcrumbItem>
              {hoofdstukParts ? (
                <BreadcrumbLink href={`/start/cursussen/${params.cursus}`}>
                  {course.title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{course.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          )}
          {hoofdstukParts && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{hoofdstukParts}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadCrumb;
