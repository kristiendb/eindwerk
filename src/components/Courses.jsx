"use client";
import { selectCourses } from "@/functions/queries";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Courses = () => {
  const supabase = createClient();
  const path = usePathname();
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const data = await selectCourses(supabase);
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <>
      {courses &&
        courses.map((course) => (
          <li className="p-2">
            <Link
              href={`/home/cursus/${course.slug}`}
              className={` text-black hover:font-bold ${
                path === `/home/cursus/${course.slug}` ? "font-bold" : ""
              }`}
            >
              {course.title}
            </Link>
          </li>
        ))}

      {/* <Link
            href="/home/cursus/typografie"
            className="col-span-1 row-span-1 h-24 sm:h-40 md:h-72 bg-red-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Typografie en lettering</div>
          </Link> */}
    </>
  );
};
export default Courses;
