import { createClient } from "@/utils/supabase/server";
import { selectTaskByChapterId } from "@/functions/queries";

const Oefeningen = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const task = await selectTaskByChapterId(supabase, id);

  return (
    <div className="flex space-x-6">
      {task ? (
        <>
          <p className="w-2/3">{task.description}</p>
          <a
            href={task.taskpdf}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
          >
            Download PDF
          </a>
        </>
      ) : (
        <p>Geen oefeningen beschikbaar</p>
      )}
    </div>
  );
};

export default Oefeningen;
