import { createClient } from "@/utils/supabase/server";
import { selectExampleByChapterId } from "@/functions/queries";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadVoorbeelden from "@/components/UploadVoorbeelden";
import { deleteExampleAction, updateExampleAction } from "@/functions/actions";
import VoorbeeldenDialog from "@/components/VoorbeeldenDialog";

const Voorbeelden = async ({ params }) => {
  const supabase = createClient();
  const [id] = params.hoofdstuk.split("-");
  const voorbeelden = await selectExampleByChapterId(supabase, id);
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  return (
    <div className="flex flex-wrap">
      {voorbeelden ? (
        voorbeelden.map((voorbeeld) => (
          <div
            key={voorbeeld.id}
            className="w-full sm:w-1/2 lg:w-1/4 p-2 relative group"
          >
            {voorbeeld.url ? (
              <a
                href={voorbeeld.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-60 relative cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={voorbeeld.exampleimage}
                    alt={voorbeeld.description}
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded"
                  />
                </div>
              </a>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="block w-full h-60 relative cursor-pointer">
                    <div className="relative w-full h-full">
                      <Image
                        src={voorbeeld.exampleimage}
                        alt={voorbeeld.description}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded"
                      />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Voorbeeld</DialogTitle>
                    <DialogDescription>
                      {voorbeeld.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative w-full h-full">
                    <Image
                      src={voorbeeld.exampleimage}
                      alt={voorbeeld.description}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded"
                    />
                  </div>
                  {isAdmin && (
                    <form action={updateExampleAction}>
                      <textarea
                        name="description"
                        defaultValue={voorbeeld.description}
                        className="w-full border rounded p-2 mt-2"
                      />
                      <input
                        type="hidden"
                        name="exampleId"
                        value={voorbeeld.id}
                      />
                      <input
                        type="hidden"
                        name="path"
                        value={
                          "/start/cursussen/" + Object.values(params).join("/")
                        }
                      />
                      <button
                        type="submit"
                        className="mt-2 bg-black text-white px-4 py-2 rounded-full"
                      >
                        Bewerk Beschrijving
                      </button>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            )}
            {isAdmin && (
              <form
                action={deleteExampleAction}
                className="absolute top-2 right-2 hidden group-hover:block"
              >
                <input type="hidden" name="exampleId" value={voorbeeld.id} />
                <input
                  type="hidden"
                  name="path"
                  value={"/start/cursussen/" + Object.values(params).join("/")}
                />
                <button className="bg-red-custom text-white px-2 py-1 rounded">
                  X
                </button>
              </form>
            )}
          </div>
        ))
      ) : (
        <p>Geen voorbeelden beschikbaar</p>
      )}
      {isAdmin && (
        <div className="w-full p-2">
          <VoorbeeldenDialog id={id} params={params} />
        </div>
      )}
    </div>
  );
};

export default Voorbeelden;
