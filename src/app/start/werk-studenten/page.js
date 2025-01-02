import { createClient } from "@/utils/supabase/server";
import { selectWorkByFeedback } from "@/functions/queries";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import UploadFeedback from "@/components/UploadFeedback";
import FeedbackDialog from "@/components/FeedbackDialog";

const page = async ({ params }) => {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  // const userId = userData.user.id;
  // const firstName = userData.user.user_metadata.firstname;
  const workData = await selectWorkByFeedback(supabase);

  return (
    <div className="flex flex-wrap -mx-2 lg:ml-12 lg:mr-12">
      <div className="w-full">
        <h2 className="text-4xl pb-8">Werk studenten</h2>
      </div>
      {workData.length > 0 ? (
        workData.map((work) => (
          <div key={work.id} className="w-full sm:w-1/2  lg:w-1/3 p-2 ">
            <div className="w-full relative border p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out hover:shadow-xl shadow-lg">
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
                  <a
                    href={work.uploadwork}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={work.uploadwork}
                      alt={work.description}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="rounded"
                    />
                  </a>
                </div>
              )}
              <div className="mt-4">
                <p className="font-bold">{work.title}</p>
                <p>{work.description}</p>
                <p className="text-sm text-gray-500">
                  {work.firstname} {work.lastname}
                </p>

                <p className="text-sm text-gray-500">
                  Datum: {new Date(work.date).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-4">
                <FeedbackDialog workId={work.id} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Nog geen werk ingediend</p>
      )}
    </div>
  );
};
export default page;
