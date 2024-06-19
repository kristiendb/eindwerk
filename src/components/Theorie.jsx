import { createClient } from "@/utils/supabase/server";
import { selectTheoryByChapterId } from "@/functions/queries";
import { deleteTheoryAction } from "@/functions/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadTheory from "@/components/UploadTheory";

const Theorie = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const theory = await selectTheoryByChapterId(supabase, id);

  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  return (
    <div className="flex space-x-6">
      {theory?.theorypdf ? (
        <div className="flex flex-col space-y-4 w-full md:mt-4 md:mb-4 md:flex-row md:space-x-6">
          <p className="w-full md:w-2/2 md:w-3/5 text-base">
            {theory.description}
          </p>
          <div className="flex items-center m-0 md:flex-row space-x-4 md:justify-end md:w-2/5">
            <a
              href={theory.theorypdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
            >
              Download PDF
            </a>
            {isAdmin ? (
              <form action={deleteTheoryAction}>
                <input
                  type="hidden"
                  name="path"
                  value={"/start/cursussen/" + Object.values(params).join("/")}
                />
                <input type="hidden" name="theorieId" value={theory.id} />
                <button className="bg-slate-200 rounded-full p-3 text-red-600 font-bold">
                  X
                </button>
              </form>
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          {isAdmin ? (
            <Dialog>
              <DialogTrigger asChild>
                <button className="mt-4 pt-2 pb-2 pl-4 pr-4 bg-black text-white rounded-full">
                  Upload Theorie
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Theorie</DialogTitle>
                  <DialogDescription>
                    Vul de volgende velden in om de theorie te uploaden.
                  </DialogDescription>
                </DialogHeader>
                <UploadTheory chapterId={id} params={params} />
              </DialogContent>
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
