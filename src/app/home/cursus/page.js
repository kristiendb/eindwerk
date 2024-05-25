"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { selectAllCourses } from "@/functions/queries";
import Link from "next/link";

const Page = () => {
  const supabase = createClient();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const data = await selectAllCourses(supabase);
      setCourses(data);
    };

    getCourses();
  }, []);

  const colorClasses = {
    typografie: "bg-red-custom",
    layout: "bg-light-green-custom",
    communicatie: "bg-yellow-custom",
    concept: "bg-purple-custom",
    kleur: "bg-light-blue-custom",
    beelden: "bg-beige-custom",
    productie: "bg-pink-custom",
    creativiteit: "bg-light-pink-custom",
  };

  return (
    <>
      <div className="md:ml-12 md:mr-9 lg:mr-12">
        <h2 className="text-4xl pb-8">Cursus</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/home/cursus/${course.slug}`}
              className={`col-span-1 row-span-1 h-40 md:h-72 ${
                colorClasses[course.slug] || "bg-default-color"
              } rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg`}
            >
              <div>{course.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;

// import Link from "next/link";

// const page = () => {
//   return (
//     <>
//       <div className="md:ml-12 md:mr-9 lg:mr-12">
//         <h2 className="text-4xl pb-8">Cursus</h2>
//         <div className="grid grid-cols-2 grid-rows-2 gap-4  lg:grid-cols-4">
//           <Link
//             href="/home/cursus/typografie"
//             className="col-span-1 row-span-1 h-40 md:h-72 bg-red-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Typografie en lettering</div>
//           </Link>
//           <Link
//             href="/home/cursus/layout"
//             className="col-span-1 row-span-1 h-40 md:h-72 bg-light-green-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Lay-out en compositie</div>
//           </Link>
//           <Link
//             href="/home/cursus/communicatie"
//             className="col-span-1 row-span-1 h-40 md:h-72 bg-yellow-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Communicatie</div>
//           </Link>
//           <Link
//             href="/home/cursus/concept"
//             className="col-span-1 row-span-1  h-40 md:h-72 bg-purple-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Concept</div>
//           </Link>
//           <Link
//             href="/home/cursus/kleur"
//             className="col-span-1  h-40 md:h-72  bg-light-blue-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Kleur</div>
//           </Link>
//           <Link
//             href="/home/cursus/beelden"
//             className="col-span-1  h-40 md:h-72  bg-beige-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Beelden</div>
//           </Link>
//           <Link
//             href="/home/cursus/productie"
//             className="col-span-1  h-40 md:h-72  bg-pink-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Productie</div>
//           </Link>
//           <Link
//             href="/home/cursus/creativiteit"
//             className="col-span-1 h-40 md:h-72  bg-light-pink-custom rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg"
//           >
//             <div>Creativiteit</div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };
// export default page;
