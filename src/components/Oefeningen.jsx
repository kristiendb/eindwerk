import { createClient } from "@/utils/supabase/server";
import { selectTaskByChapterId, selectWorkByTaskId } from "@/functions/queries";
import {
  deleteTaskAction,
  deleteResultAction,
  updateResultAction,
} from "@/functions/actions";
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
import UpdateResultDialog from "./UpdateResultDialog";
import UpdateOefeningenDialog from "./UpdateOefeningenDialog";

const Oefeningen = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const tasks = await selectTaskByChapterId(supabase, id);
  const { data: userData } = await supabase.auth.getUser();

  const isAdmin = userData?.user?.user_metadata?.role === "admin";

  const workPromises = tasks.map((task) =>
    selectWorkByTaskId(supabase, task.id)
  );
  const workDataArray = await Promise.all(workPromises);

  console.log(tasks);

  return (
    <div className="w-full flex flex-col space-y-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => {
          const work = workDataArray[index];
          const userWorks = work.filter(
            (w) => w.users_userid === userData.user.id
          );

          return (
            <div
              key={task.id}
              className={`flex flex-col space-y-4 w-full pb-4 ${
                index !== tasks.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-4/6 text-base flex flex-col">
                  <p className="font-bold">{task.title}</p>
                  <p>{task.description}</p>
                </div>
                <div className="flex items-center w-full mt-2 md:mt-0 md:justify-end space-x-4">
                  <a
                    href={task.taskpdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 pb-3 pl-6 pr-6 bg-black text-white border-black border-0.25 hover:bg-white hover:text-black duration-300 transition-all rounded-full text-sm"
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
                      <button className=" text-red-custom">
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
                  {isAdmin && (
                    // {tasks.map((task, index) => (
                    //   <div key={task.id} className="task-item">
                    //     <div className="task-info">
                    //       <p>{task.title}</p>
                    //       <p>{task.description}</p>
                    //     </div>
                    //     <UpdateOefeningenDialog params={params} task={task} id={task.id} />
                    //   </div>
                    // ))}
                    <div className="p-2">
                      <UpdateOefeningenDialog
                        params={params}
                        task={task}
                        id={task.id}
                      />
                    </div>
                  )}
                  {!isAdmin && (
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
                </div>
              </div>
              {!isAdmin &&
                userWorks.length > 0 &&
                userWorks.map((work) => (
                  <div
                    key={work.id}
                    className="mt-2 p-4 flex flex-row justify-between bg-gray-100 rounded-lg border border-gray-300"
                  >
                    <div>
                      <p className="font-semibold">{work.title}</p>
                      <p>{work.description}</p>
                      <a
                        href={work.uploadwork}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-500"
                      >
                        Bekijk bestand
                      </a>
                      {work.feedback && (
                        <p className="mt-2 text-green-600">
                          Feedback: {work.feedback}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      <div className="p-2">
                        <UpdateResultDialog
                          params={params}
                          work={work}
                          id={work.id}
                        />
                        {/* <Dialog>
                          <DialogTrigger asChild>
                            <button className="ml-2 pt-2 pb-2 pl-4 pr-4 bg-yellow-500 text-white rounded-lg">
                              Bewerken
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Bewerk Resultaat</DialogTitle>
                              <DialogDescription>
                                Pas de titel en omschrijving van je upload aan.
                              </DialogDescription>
                            </DialogHeader>
                            <form action={updateResultAction}>
                              <input
                                type="hidden"
                                name="uploadId"
                                value={work.id}
                              />
                              <input
                                type="hidden"
                                name="path"
                                value={
                                  "/start/cursussen/" +
                                  Object.values(params).join("/")
                                }
                              />
                              <div className="mt-4">
                                <label className="block text-sm font-medium">
                                  Titel
                                </label>
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={work.title}
                                  className="mt-1 w-full border-gray-300 rounded-md"
                                />
                              </div>
                              <div className="mt-4">
                                <label className="block text-sm font-medium">
                                  Omschrijving
                                </label>
                                <textarea
                                  name="description"
                                  defaultValue={work.description}
                                  className="mt-1 w-full border-gray-300 rounded-md"
                                ></textarea>
                              </div>
                              <button
                                type="submit"
                                className="mt-4 bg-green-500 text-white rounded-lg px-4 py-2"
                              >
                                Opslaan
                              </button>
                            </form>
                          </DialogContent>
                        </Dialog>{" "} */}
                      </div>
                      <div>
                        <form action={deleteResultAction}>
                          <input
                            type="hidden"
                            name="path"
                            value={
                              "/start/cursussen/" +
                              Object.values(params).join("/")
                            }
                          />
                          <input
                            type="hidden"
                            name="uploadId"
                            value={work.id}
                          />
                          <button className=" text-red-custom">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-10"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l-1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
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

// import { createClient } from "@/utils/supabase/server";
// import { selectTaskByChapterId, selectWorkByTaskId } from "@/functions/queries";
// import { deleteTaskAction } from "@/functions/actions";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import UploadOefeningen from "@/components/UploadOefeningen";
// import UploadResultaat from "@/components/UploadResultaat";
// import OefeningenDialog from "./OefeningenDialog";

// const Oefeningen = async ({ params }) => {
//   const supabase = createClient();
//   const [id] = params.hoofdstuk.split("-");
//   const tasks = await selectTaskByChapterId(supabase, id);
//   const { data: userData } = await supabase.auth.getUser();

//   let isAdmin = false;

//   if (userData?.user?.user_metadata?.role === "admin") {
//     isAdmin = true;
//   }

//   const workPromises = tasks.map((task) =>
//     selectWorkByTaskId(supabase, task.id)
//   );
//   const workDataArray = await Promise.all(workPromises);

//   return (
//     <div className="w-full flex flex-col space-y-4">
//       {tasks && tasks.length > 0 ? (
//         tasks.map((task, index) => {
//           const work = workDataArray[index];
//           const userWork = work.find(
//             (w) => w.users_userid === userData.user.id
//           );

//           return (
//             <div
//               key={task.id}
//               className={`flex flex-col space-y-4 w-full pb-4 ${
//                 index !== tasks.length - 1 ? "border-b border-gray-300" : ""
//               }`}
//             >
//               <div className="flex flex-col md:flex-row justify-between items-center">
//                 <div className="w-full md:w-4/6 text-base flex flex-col">
//                   <p className="font-bold">{task.title}</p>
//                   <p>{task.description}</p>
//                 </div>
//                 <div className="flex items-center w-full mt-2 md:mt-0 md:justify-end space-x-4">
//                   <a
//                     href={task.taskpdf}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="pt-3 pb-3 pl-6 pr-6 bg-black text-white border-black border-0.25 hover:bg-white hover:text-black duration-300 transition-all rounded-full text-sm"
//                   >
//                     Download PDF
//                   </a>
//                   {isAdmin && (
//                     <form action={deleteTaskAction}>
//                       <input
//                         type="hidden"
//                         name="path"
//                         value={
//                           "/start/cursussen/" + Object.values(params).join("/")
//                         }
//                       />
//                       <input type="hidden" name="taskId" value={task.id} />
//                       <button className=" text-red-custom">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="size-10"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </button>
//                     </form>
//                   )}
//                   {!isAdmin && (
//                     <>
//                       {userWork ? (
//                         userWork.feedback ? (
//                           <Dialog>
//                             <DialogTrigger asChild>
//                               <button className="ml-2 pt-3 pb-3 pl-6 pr-6 bg-green-custom text-black rounded-full">
//                                 Bekijk feedback
//                               </button>
//                             </DialogTrigger>
//                             <DialogContent>
//                               <DialogHeader>
//                                 <DialogTitle>Feedback</DialogTitle>
//                               </DialogHeader>
//                               <div className="p-4">
//                                 <p>{userWork.feedback}</p>
//                               </div>
//                             </DialogContent>
//                           </Dialog>
//                         ) : (
//                           <div className="ml-2 pt-3 pb-3 pl-6 pr-6 bg-yellow-custom text-black rounded-full">
//                             Wachten op feedback
//                           </div>
//                         )
//                       ) : (
//                         <Dialog>
//                           <DialogTrigger asChild>
//                             <button className="ml-2 pt-3 pb-3 pl-6 pr-6 bg-white text-black border-0.25 border-black rounded-full">
//                               Upload resultaat
//                             </button>
//                           </DialogTrigger>
//                           <DialogContent>
//                             <DialogHeader>
//                               <DialogTitle>Upload Resultaat</DialogTitle>
//                               <DialogDescription>
//                                 Vul de volgende velden in om je resultaat te
//                                 uploaden.
//                               </DialogDescription>
//                             </DialogHeader>
//                             <UploadResultaat taskId={task.id} params={params} />
//                           </DialogContent>
//                         </Dialog>
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>Geen oefeningen beschikbaar</p>
//       )}
//       {isAdmin && <OefeningenDialog id={id} params={params} />}
//     </div>
//   );
// };

// export default Oefeningen;
