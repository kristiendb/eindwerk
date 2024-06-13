import { selectAllCourses } from "@/functions/queries";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { slugit } from "@/helpers";

const Page = async () => {
  const supabase = createClient();
  const courses = await selectAllCourses(supabase);

  return (
    <>
      <div className="md:ml-12 md:mr-9 lg:mr-12">
        <h2 className="text-4xl pb-8">Cursus</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4">
          {courses.map(({ title, id, color }) => (
            <Link
              key={id}
              href={`/start/cursussen/${id}-${slugit(title)}`}
              className={`col-span-1 row-span-1 h-40 md:h-72 ${color} rounded-3xl md:pl-6 md:pr-6 md:pt-8 pl-4 pr-4 pt-6 font-bold text-lg`}
            >
              <div>{title}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
