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
            <div className="flex md:justify-between items-center flex-col md:flex-row">
              <div className="w-full md:w-3/5 text-base flex flex-col">
                <p className="font-bold">{task.title}</p>
                <p>{task.description}</p>
              </div>
              <div className="flex w-full mt-2 md:mt-0 md:justify-end items-center space-x-4">
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
                    <button className="text-red-custom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                          clipRule="evenodd"
                        />
                      </svg>
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
