import { createClient } from "@/utils/supabase/server";
import { selectAssignmentByChapterId } from "@/functions/queries";

const Opdrachten = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const assignment = await selectAssignmentByChapterId(supabase, id);

  return (
    <div className="flex space-x-6">
      {assignment ? (
        <>
          <p className="w-2/3">{assignment.description}</p>
          <a
            href={assignment.taskpdf}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
          >
            Download PDF
          </a>
        </>
      ) : (
        <p>Geen opdrachten beschikbaar</p>
      )}
    </div>
  );
};

export default Opdrachten;
