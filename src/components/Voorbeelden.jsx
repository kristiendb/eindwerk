import { createClient } from "@/utils/supabase/server";
import { selectExampleByChapterId } from "@/functions/queries";
import Image from "next/image";

const Voorbeelden = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const voorbeelden = await selectExampleByChapterId(supabase, id);
  console.log(voorbeelden);

  return (
    <div className="grid grid-cols-4 space-x-20">
      {voorbeelden ? (
        voorbeelden.map((voorbeeld) => (
          <div key={voorbeeld.id} className="col-span-1 h-60 w-60 relative">
            <Image
              src={voorbeeld.exampleimage}
              alt={voorbeeld.description}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))
      ) : (
        <p>Geen voorbeelden beschikbaar</p>
      )}
    </div>
  );
};

export default Voorbeelden;
