import { createClient } from "@/utils/supabase/server";
import { selectTaskByChapterId } from "@/functions/queries";

const Oefeningen = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const task = await selectTaskByChapterId(supabase, id);

  return (
    <div className="flex space-x-6">
      {task ? (
        <div className="flex flex-col space-y-4 w-full md:mt-4 md:mb-4 md:flex-row md:space-x-6">
          <p className="w-full md:w-2/2 md:w-3/5 text-base">
            {task.description}
          </p>
          <div className="flex md:flex-row space-x-4 md:justify-end md:w-2/5">
            <div className="pt-2 pb-4">
              <a
                href={task.taskpdf}
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
        <p>Geen oefeningen beschikbaar</p>
      )}
    </div>
  );
};

export default Oefeningen;
