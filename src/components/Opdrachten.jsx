import { createClient } from "@/utils/supabase/server";
import { selectAssignmentByChapterId } from "@/functions/queries";

const Opdrachten = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const assignment = await selectAssignmentByChapterId(supabase, id);

  return (
    <div className="flex space-x-6">
      {assignment ? (
        <div className="flex flex-col space-y-4 w-full md:flex-row md:space-x-6">
          <p className="w-full md:w-2/3 text-base">{assignment.description}</p>
          <div className="flex md:flex-row space-x-4 md:justify-end md:w-2/5">
            <div className="pt-2 pb-4">
              <a
                href={assignment.taskpdf}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
              >
                Download PDF
              </a>
            </div>
            <div className="pt-2 pb-4">
              <a
                href="#"
                className="pt-3 pb-3 pl-6 pr-6 bg-white text-black border-0.25 border-solid border-black rounded-full text-sm h-fit"
              >
                Upload resultaat
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Geen opdrachten beschikbaar</p>
      )}
    </div>
  );
};

export default Opdrachten;
