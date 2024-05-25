"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Chapters from "@/components/Chapters";
import Levels from "@/components/Levels";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
  const { slug } = useParams();
  const supabase = createClient();
  const [course, setCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("all");

  useEffect(() => {
    if (slug) {
      const fetchCourse = async () => {
        let { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("slug", slug)
          .single();
        if (error) {
          console.error(error);
          return;
        }
        setCourse(data);
      };

      fetchCourse();
    }
  }, [slug]);

  if (!course) return <div>Loading...</div>;

  return (
    <>
      <div className="md:ml-12 md:mr-9 lg:mr-12">
        <div>
          <Breadcrumb>
            <BreadcrumbList className="text-xl">
              <BreadcrumbItem>
                <BreadcrumbLink href="/home/cursus">Cursus</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{course.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="pt-10">
          <Levels onSelectLevel={setSelectedLevel} />
        </div>
        <div>
          <Chapters selectedLevel={selectedLevel} courseId={course.id} />
        </div>
      </div>
    </>
  );
};

export default page;
