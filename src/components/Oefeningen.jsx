import { createClient } from "@/utils/supabase/server";
import { selectTaskByChapterId, selectWorkByTaskId } from "@/functions/queries";
import { deleteTaskAction } from "@/functions/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadOefeningen from "@/components/UploadOefeningen";
import UploadResultaat from "@/components/UploadResultaat";
import OefeningenDialog from "./OefeningenDialog";

const Oefeningen = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const tasks = await selectTaskByChapterId(supabase, id);
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  const workPromises = tasks.map((task) =>
    selectWorkByTaskId(supabase, task.id)
  );
  const workDataArray = await Promise.all(workPromises);

  return (
    <div className="w-full flex flex-col space-y-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => {
          const work = workDataArray[index];
          const userWork = work.find(
            (w) => w.users_userid === userData.user.id
          );

          return (
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
                  {!isAdmin && (
                    <>
                      {userWork ? (
                        userWork.feedback ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="ml-2 pt-3 pb-3 pl-6 pr-6 bg-green-custom text-black rounded-full">
                                Bekijk feedback
                              </button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Feedback</DialogTitle>
                              </DialogHeader>
                              <div className="p-4">
                                <p>{userWork.feedback}</p>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <div className="ml-2 pt-3 pb-3 pl-6 pr-6 bg-yellow-custom text-black rounded-full">
                            Wachten op feedback
                          </div>
                        )
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="ml-2 pt-3 pb-3 pl-6 pr-6 bg-white text-black border-0.25 border-black rounded-full">
                              Upload resultaat
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Upload Resultaat</DialogTitle>
                              <DialogDescription>
                                Vul de volgende velden in om je resultaat te
                                uploaden.
                              </DialogDescription>
                            </DialogHeader>
                            <UploadResultaat taskId={task.id} params={params} />
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Geen oefeningen beschikbaar</p>
      )}
      {isAdmin && <OefeningenDialog id={id} params={params} />}
    </div>
  );
};

export default Oefeningen;
