import { createClient } from "@/utils/supabase/server";
import { selectTheoryByChapterId } from "@/functions/queries";

const Inleiding = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const theory = await selectTheoryByChapterId(supabase, id);

  return (
    <div className="flex space-x-6">
      {theory ? (
        <p className="w-2/3">{theory.introduction}</p>
      ) : (
        <p>Geen inleiding beschikbaar</p>
      )}
    </div>
  );
};

export default Inleiding;
