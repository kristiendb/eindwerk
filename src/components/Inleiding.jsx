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
import InleidingDialog from "./InleidingDialog";

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
          <div className="w-full flex mt-4">
            <InleidingDialog params={params} id={id} theory={theory} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Inleiding;
