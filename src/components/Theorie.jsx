import { createClient } from "@/utils/supabase/server";
import { selectTheoryByChapterId } from "@/functions/queries";

const Theorie = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const theory = await selectTheoryByChapterId(supabase, id);

  return (
    <div className="flex space-x-6">
      {theory ? (
        <>
          <p className="w-2/3">{theory.description}</p>
          <a
            href={theory.theorypdf}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
          >
            Download PDF
          </a>
        </>
      ) : (
        <p>Geen theorie beschikbaar</p>
      )}
    </div>
  );
};

export default Theorie;
