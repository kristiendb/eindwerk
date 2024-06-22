import { createClient } from "@/utils/supabase/server";
import { selectWorkByUserId } from "@/functions/queries";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Page = async () => {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData.user.id;
  const workData = await selectWorkByUserId(supabase, userId);

  return (
    <div className="flex flex-wrap -mx-2 lg:ml-12 lg:mr-12">
      <div className="w-full">
        <h2 className="text-4xl pb-8">Mijn werk</h2>
      </div>
      {workData.length > 0 ? (
        workData.map((work) => (
          <div key={work.id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="w-full relative border p-4 rounded-lg shadow-lg">
              {work.uploadwork.endsWith(".pdf") ? (
                <a
                  href={work.uploadwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-60 flex items-center justify-center bg-gray-200 rounded"
                >
                  <p className="text-center underline">Bekijk PDF</p>
                </a>
              ) : (
                <div className="h-60 relative">
                  <Image
                    src={work.uploadwork}
                    alt={work.description}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="rounded"
                  />
                </div>
              )}
              <div className="mt-4">
                <p className="font-bold">{work.title}</p>
                <p>{work.description}</p>
                <p className="text-sm text-gray-500">
                  Datum: {new Date(work.date).toLocaleDateString()}
                </p>
              </div>
              {work.feedback ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-2 bg-green-custom text-white py-1 px-3 rounded">
                      Bekijk Feedback
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Feedback</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <p>{work.feedback}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="mt-2 bg-yellow-custom text-black py-1 px-3 rounded">
                  Nog geen Feedback
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Nog geen werk ingediend</p>
      )}
    </div>
  );
};

export default Page;
