import { createClient } from "@/utils/supabase/server";
import { selectAssignmentByChapterId } from "@/functions/queries";
import { deleteTaskAction } from "@/functions/actions";
import OpdrachtenDialog from "./OpdrachtenDialog";

const Opdrachten = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const tasks = await selectAssignmentByChapterId(supabase, id);
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  return (
    <div className="w-full flex flex-col space-y-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={task.id}
            className={`flex flex-col space-y-4 w-full pb-4 ${
              index !== tasks.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="w-full md:w-3/5 text-base flex flex-col">
                <p className="font-bold">{task.title}</p>
                <p>{task.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={task.taskpdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm"
                >
                  Download PDF
                </a>
                {isAdmin && (
                  <form action={deleteTaskAction}>
                    <input
                      type="hidden"
                      name="path"
                      value={
                        "/start/cursussen/" + Object.values(params).join("/")
                      }
                    />
                    <input type="hidden" name="taskId" value={task.id} />
                    <button className="bg-slate-200 rounded-full p-3 text-red-600 font-bold">
                      X
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Geen opdrachten beschikbaar</p>
      )}
      {isAdmin && (
        <div className="flex justify-start">
          <OpdrachtenDialog id={id} params={params} />
        </div>
      )}
    </div>
  );
};

export default Opdrachten;
