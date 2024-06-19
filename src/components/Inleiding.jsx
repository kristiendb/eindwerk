import { createClient } from "@/utils/supabase/server";
import { selectTheoryByChapterId } from "@/functions/queries";
import { updateIntroductionAction } from "@/functions/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Inleiding = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const theory = await selectTheoryByChapterId(supabase, id);

  const { data: userData } = await supabase.auth.getUser();
  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full text-sm">
        <p>{theory?.introduction || "Geen inleiding beschikbaar"}</p>
        {isAdmin && (
          <div className="w-full flex justify-end mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full">
                  Wijzig Inleiding
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {theory?.introduction
                      ? "Bewerk Introductie"
                      : "Voeg Introductie Toe"}
                  </DialogTitle>
                </DialogHeader>
                <form action={updateIntroductionAction}>
                  <input
                    type="hidden"
                    name="path"
                    value={
                      "/start/cursussen/" + Object.values(params).join("/")
                    }
                  />
                  <textarea
                    name="introduction"
                    defaultValue={theory?.introduction || ""}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  ></textarea>
                  <input type="hidden" name="chapterId" value={id} />
                  <button
                    type="submit"
                    className="mt-4 bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Opslaan
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inleiding;
