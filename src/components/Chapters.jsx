import Link from "next/link";
import { slugit } from "@/helpers";
import { selectChaptersByCourseId } from "@/functions/queries";
import { createClient } from "@/utils/supabase/client";

const Chapters = async ({ selectedLevel, courseId }) => {
  const supabase = createClient();
  const chapters = await selectChaptersByCourseId(supabase, courseId);

  const filteredChapters =
    selectedLevel && selectedLevel !== "all"
      ? chapters.filter(
          (chapter) => chapter.level_idlevel === parseInt(selectedLevel)
        )
      : chapters;

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10">
      {filteredChapters &&
        filteredChapters.map((chapter) => {
          let color;
          switch (chapter.level_idlevel) {
            case 1:
              color = "bg-opacity-40";
              break;
            case 2:
              color = "bg-opacity-60";
              break;
            case 3:
              color = "bg-opacity-80";
              break;
            case 4:
              color = "bg-opacity-100";
              break;
            default:
              color = "bg-opacity-100";
          }
          const courseSlug = slugit(chapter.course.title);
          const levelSlug = slugit(chapter.level.name);
          const chapterSlug = slugit(chapter.title);

          return (
            <Link
              key={chapter.id}
              href={`/start/cursus/${courseSlug}/${levelSlug}/${chapterSlug}`}
            >
              <div
                className={`bg-red-custom ${color} h-72 rounded-3xl`}
                key={chapter.id}
              >
                <h4 className="pt-6 pl-6 pr-6 pb-2 border-b-0.25 border-black font-bold">
                  {chapter.level.name}
                </h4>
                <h3 className="pt-3 pl-6 pr-6 pb-3 font-bold text-xl">
                  {chapter.title}
                </h3>
                <p className="pl-6 pr-6 font-hepta-slab text-sm">
                  {chapter.description}
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Chapters;
