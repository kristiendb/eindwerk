import { selectChaptersByCourseId } from "@/functions/queries";
import { createClient } from "@/utils/supabase/server";
import Levels from "@/components/Levels";
import { slugit } from "@/helpers";
import Link from "next/link";
import HoofdstukkenDialog from "@/components/HoofdstukkenDialog";
import UpdateHoofdstukkenDialog from "@/components/UpdateHoofdstukkenDialog";
import DeleteHoofdstukkenDialog from "@/components/DeleteHoofdstukkenDialog";

const page = async ({ params, searchParams }) => {
  const [id] = params.cursus.split("-");
  const supabase = createClient();
  const chapters = await selectChaptersByCourseId(supabase, id, searchParams);
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  // Sorteer de hoofdstukken op titel en level
  const sortedChapters = chapters.sort((a, b) => {
    if (a.title === b.title) {
      return a.level_idlevel - b.level_idlevel; // Sorteer op level binnen dezelfde titel
    }
    return a.title.localeCompare(b.title); // Sorteer alfabetisch op titel
  });

  let lastTitle = null;

  return (
    <>
      <div className="pt-10">
        <Levels selectedLevel={searchParams.levelId || "all"} />
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedChapters.map((chapter, index) => {
            let colorShade;
            switch (chapter.level_idlevel) {
              case 1:
                colorShade = "bg-opacity-40";
                break;
              case 2:
                colorShade = "bg-opacity-60";
                break;
              case 3:
                colorShade = "bg-opacity-80";
                break;
              case 4:
                colorShade = "bg-opacity-100";
                break;
              default:
                colorShade = "bg-opacity-100";
            }

            const courseSlug = slugit(chapter.course.title);
            const levelSlug = slugit(chapter.level.name);
            const chapterSlug = slugit(chapter.title);

            const showTitle = chapter.title !== lastTitle;
            lastTitle = chapter.title;

            return (
              <>
                {showTitle && (
                  <div
                    key={`title-${chapter.title}`}
                    className={`col-span-full ${
                      index !== 0 ? "border-t border-gray-300" : ""
                    }`}
                  >
                    {/* <h2 className="text-2xl font-bold">{chapter.title}</h2> */}
                  </div>
                )}
                <div key={chapter.id} className="relative group">
                  <Link
                    href="/start/cursussen/[cursus]-[hoofdstuk]"
                    as={`/start/cursussen/${chapter.course.id}-${courseSlug}/${chapter.id}-${chapterSlug}-${levelSlug}`}
                  >
                    <div
                      className={`bg-${chapter.course.color} ${colorShade} h-72 rounded-3xl hover:shadow-lg hover:shadow-slate-400 transition-all duration-300 ease-in-out shadow-md`}
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
                  {isAdmin && (
                    <>
                      <div className="absolute bottom-6 left-6 hidden group-hover:block">
                        <UpdateHoofdstukkenDialog
                          chapter={chapter}
                          id={chapter.id}
                          params={params}
                        />
                      </div>
                      <div className="absolute bottom-6 right-6 hidden group-hover:block">
                        <DeleteHoofdstukkenDialog
                          chapter={chapter}
                          id={chapter.id}
                          params={params}
                        />
                      </div>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {isAdmin && (
        <div className="flex justify-start mt-4">
          <HoofdstukkenDialog id={id} params={params} />
        </div>
      )}
    </>
  );
};

export default page;

// import { selectChaptersByCourseId } from "@/functions/queries";
// import { createClient } from "@/utils/supabase/server";
// import Levels from "@/components/Levels";
// import { slugit } from "@/helpers";
// import Link from "next/link";
// import HoofdstukkenDialog from "@/components/HoofdstukkenDialog";
// import UpdateHoofdstukkenDialog from "@/components/UpdateHoofdstukkenDialog";
// import DeleteHoofdstukkenDialog from "@/components/DeleteHoofdstukkenDialog";

// const page = async ({ params, searchParams }) => {
//   const [id] = params.cursus.split("-");
//   const supabase = createClient();
//   const chapters = await selectChaptersByCourseId(supabase, id, searchParams);
//   const { data: userData } = await supabase.auth.getUser();

//   let isAdmin = false;

//   if (userData?.user?.user_metadata?.role === "admin") {
//     isAdmin = true;
//   }

//   return (
//     <>
//       <div className="pt-10">
//         <Levels selectedLevel={searchParams.levelId || "all"} />
//       </div>
//       <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10">
//         {chapters &&
//           chapters
//             .sort((a, b) => {
//               if (a.title === b.title) {
//                 return a.level_idlevel - b.level_idlevel; // Sorteer op level binnen dezelfde title
//               }
//               return a.title.localeCompare(b.title); // Sorteer alfabetisch op title
//             })
//             .map((chapter, index, array) => {
//               let colorShade;
//               switch (chapter.level_idlevel) {
//                 case 1:
//                   colorShade = "bg-opacity-40";
//                   break;
//                 case 2:
//                   colorShade = "bg-opacity-60";
//                   break;
//                 case 3:
//                   colorShade = "bg-opacity-80";
//                   break;
//                 case 4:
//                   colorShade = "bg-opacity-100";
//                   break;
//                 default:
//                   colorShade = "bg-opacity-100";
//               }
//               const courseSlug = slugit(chapter.course.title);
//               const levelSlug = slugit(chapter.level.name);
//               const chapterSlug = slugit(chapter.title);

//               {
//                 /* <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10">
//         {chapters &&
//           chapters.map((chapter) => {
//             let colorShade;
//             switch (chapter.level_idlevel) {
//               case 1:
//                 colorShade = "bg-opacity-40";
//                 break;
//               case 2:
//                 colorShade = "bg-opacity-60";
//                 break;
//               case 3:
//                 colorShade = "bg-opacity-80";
//                 break;
//               case 4:
//                 colorShade = "bg-opacity-100";
//                 break;
//               default:
//                 colorShade = "bg-opacity-100";
//             }
//             const courseSlug = slugit(chapter.course.title);
//             const levelSlug = slugit(chapter.level.name);
//             const chapterSlug = slugit(chapter.title);
//             // const beige = "bg-beige-custom";
//             // const pink = "bg-pink-custom";
//             // const lightPink = "bg-light-pink-custom"; */
//               }
//               return (
//                 <div key={chapter.id} className="relative group">
//                   <Link
//                     href="/start/cursussen/[cursus]-[hoofdstuk]"
//                     as={`/start/cursussen/${chapter.course.id}-${courseSlug}/${chapter.id}-${chapterSlug}-${levelSlug}`}
//                   >
//                     <div
//                       className={`bg-${chapter.course.color} ${colorShade} h-72 rounded-3xl hover:shadow-lg hover:shadow-slate-400 transition-all duration-300 ease-in-out shadow-md`}
//                     >
//                       <h4 className="pt-6 pl-6 pr-6 pb-2 border-b-0.25 border-black font-bold">
//                         {chapter.level.name}
//                       </h4>
//                       <h3 className="pt-3 pl-6 pr-6 pb-3 font-bold text-xl">
//                         {chapter.title}
//                       </h3>
//                       <p className="pl-6 pr-6 font-hepta-slab text-sm">
//                         {chapter.description}
//                       </p>
//                     </div>
//                   </Link>
//                   {isAdmin && (
//                     <>
//                       <div className="absolute bottom-6 left-6 hidden group-hover:block">
//                         <UpdateHoofdstukkenDialog
//                           chapter={chapter}
//                           id={chapter.id}
//                           params={params}
//                         />
//                       </div>
//                       <div className="absolute bottom-6 right-6 hidden group-hover:block">
//                         <DeleteHoofdstukkenDialog
//                           chapter={chapter}
//                           id={chapter.id}
//                           params={params}
//                         />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//       </div>
//       {isAdmin && (
//         <div className="flex justify-start mt-4">
//           <HoofdstukkenDialog id={id} params={params} />
//         </div>
//       )}
//     </>
//   );
// };
// export default page;
