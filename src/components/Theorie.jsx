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
          <p className="w-full md:w-3/5 text-base">{theory.description}</p>
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
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          {isAdmin ? (
            <Dialog>
              <DialogTrigger asChild>
                <button className="pt-1 pb-1 pl-3 pr-3 bg-beige-custom text-black rounded-full border-0.25 border-beige-custom hover:bg-white hover:text-black hover:border-green hover:border-0.25  hover:transition-all duration-700">
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
