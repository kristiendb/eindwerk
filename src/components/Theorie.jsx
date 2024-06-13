import { createClient } from "@/utils/supabase/server";
import { selectTheoryByChapterId, selectUser } from "@/functions/queries";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadTheory from "@/components/UploadTheory";

const Theorie = async ({ params, searchParams }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const theory = await selectTheoryByChapterId(supabase, id);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  let isTeacher = false;
  if (user) {
    const userInfo = await selectUser(supabase, user.id);
    isTeacher = userInfo && userInfo.isteacher;
  }

  return (
    <div className="flex space-x-6">
      {theory ? (
        <div className="flex flex-col space-y-4 w-full md:flex-row md:space-x-6">
          <p className="w-full md:w-2/3 text-base">{theory.description}</p>
          <div className="pt-2 pb-4 md:w-1/3">
            <a
              href={theory.theorypdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
            >
              Download PDF
            </a>
          </div>
        </div>
      ) : (
        <div>
          {isTeacher ? (
            // <button className="mt-4 pt-2 pb-2 pl-4 pr-4 bg-blue-500 text-white rounded">
            //   Upload Theorie
            // </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="mt-4 pt-2 pb-2 pl-4 pr-4 bg-blue-500 text-white rounded">
                  Upload Theorie
                </button>
              </DialogTrigger>
              <UploadTheory chapterId={id} />
            </Dialog>
          ) : (
            <p>Geen theorie beschikbaar</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Theorie;

// import { createClient } from "@/utils/supabase/server";
// import { selectTheoryByChapterId } from "@/functions/queries";

// const Theorie = async ({ params }) => {
//   const supabase = createClient();
//   const [id] = params.hoofdstuk.split("-");
//   const theory = await selectTheoryByChapterId(supabase, id);

//   return (
//     <div className="flex space-x-6">
//       {theory ? (
//         <div className="flex flex-col space-y-4 w-full md:flex-row md:space-x-6">
//           <p className="w-full md:w-2/3 text-base">{theory.description}</p>
//           <div className="pt-2 pb-4 md:w-1/3">
//             <a
//               href={theory.theorypdf}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
//             >
//               Download PDF
//             </a>
//           </div>
//         </div>
//       ) : (
//         <p>Geen theorie beschikbaar</p>
//       )}
//     </div>
//   );
// };

// export default Theorie;
