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
import { updateShowcaseAction } from "@/functions/actions";

const page = async ({ params }) => {
  const supabase = createClient();
  const showcases = await selectWorkByShowcase(supabase);
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

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
              {isAdmin ? (
                <form method="POST" action={updateShowcaseAction}>
                  <input
                    type="hidden"
                    name="path"
                    value={
                      "/start/cursussen/" + Object.values(params).join("/")
                    }
                  />
                  <input type="hidden" name="showcaseId" value={showcase.id} />
                  <button className="text-red-custom">
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
        </div>
      ))}
    </div>
  );
};
export default page;
