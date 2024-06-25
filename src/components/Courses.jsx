"use client";
import { selectAllCourses } from "@/functions/queries";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { slugit } from "@/helpers";

const Courses = () => {
  const supabase = createClient();
  const path = usePathname();
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const data = await selectAllCourses(supabase);
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return (
    <>
      {courses &&
        courses.map(({ id, title }) => (
          <li className="p-2" key={id}>
            <Link
              href={`/start/cursussen/${id}-${slugit(title)}`}
              className={` text-black hover:font-bold ${
                path === `/start/cursussen/${id}-${slugit(title)}`
                  ? "font-bold"
                  : ""
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
    </>
  );
};
export default Courses;
