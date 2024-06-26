import { selectAllCourses } from "@/functions/queries";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { slugit } from "@/helpers";

const Page = async () => {
  const supabase = createClient();
  const courses = await selectAllCourses(supabase);

  return (
    <>
      <div className="lg:ml-12 lg:mr-12">
        <h2 className="text-4xl pb-8">Cursus</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map(({ title, id, color }, index) => {
            let colSpanClass = "col-span-1";
            if (index === 2 || index === 3) colSpanClass = "col-span-2";

            return (
              <Link
                key={id}
                href={`/start/cursussen/${id}-${slugit(title)}`}
                className={`${colSpanClass} row-span-1 h-40 md:h-72 bg-${color} rounded-3xl md:pl-6 md:pr-6 md:pt-8 pl-4 pr-4 pt-6 font-bold text-lg`}
              >
                <div>{title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
