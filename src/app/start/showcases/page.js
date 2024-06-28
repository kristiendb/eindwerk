import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { selectWorkByShowcase } from "@/functions/queries";

const page = async () => {
  const supabase = createClient();
  const showcases = await selectWorkByShowcase(supabase);

  return (
    <div className="flex flex-wrap -mx-2 lg:ml-12 lg:mr-12">
      <div className="w-full">
        <h2 className="text-4xl pb-8">Showcases</h2>
      </div>
      {showcases.map((showcase) => (
        <div key={showcase.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="w-full relative border p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out hover:shadow-xl">
            {showcase.uploadwork.endsWith(".pdf") ? (
              <a
                href={showcase.uploadwork}
                target="_blank"
                rel="noopener noreferrer"
                className="h-60 flex items-center justify-center bg-gray-200 rounded"
              >
                <p className="text-center underline">Bekijk PDF</p>
              </a>
            ) : (
              <div className="h-60 relative">
                <a
                  href={showcase.uploadwork}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={showcase.uploadwork}
                    alt={showcase.description}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="rounded"
                  />
                </a>
              </div>
            )}
            <div className="mt-4">
              <p className="font-bold">{showcase.title}</p>
              <p>{showcase.description}</p>
              <p className="text-sm text-gray-500">
                Datum: {new Date(showcase.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default page;
