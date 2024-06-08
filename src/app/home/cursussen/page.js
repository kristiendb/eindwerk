import { selectAllCourses } from "@/functions/queries";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { slugit } from "@/helpers";

const Page = async () => {
  const supabase = createClient();
  const courses = await selectAllCourses(supabase);

  const colorClasses = {
    ["typografie-en-lettering"]: "bg-red-custom",
    ["lay-out-en-compositie"]: "bg-light-green-custom",
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
          {courses.map(({ title, id }) => (
            <Link
              key={id}
              href={`/home/cursussen/${id}-${slugit(title)}`}
              className={`col-span-1 row-span-1 h-40 md:h-72 ${
                colorClasses[slugit(title)] || "bg-default-color"
              } rounded-3xl pl-6 pr-6 pt-8 font-bold text-lg`}
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
