import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

const page = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  const user = data.user;
  const { firstname } = user.user_metadata;
  return (
    <>
      <div className=" lg:ml-12 lg:mr-12">
        <h2 className="text-4xl pb-8">Welkom, {firstname}!</h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-4  lg:grid-cols-4">
          <Link
            href="/start/agenda"
            className="col-span-1 row-span-1 h-40 md:h-72 bg-red-custom hover:bg-opacity-80 rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Agenda</div>
          </Link>
          <Link
            href="/start/info"
            className="col-span-1 row-span-1 h-40 md:h-72 bg-light-green-custom hover:bg-opacity-80 rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Info</div>
          </Link>
          <Link
            href="/start/cursussen"
            className="col-span-1 row-span-1 lg:col-span-2 h-40 md:h-72 sm:col-span-1 hover:bg-opacity-80 bg-yellow-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Cursus</div>
          </Link>
          <Link
            href="/start/mijn-werk"
            className="col-span-1 row-span-1 lg:col-span-2 h-40 md:h-72 sm:col-span-1 hover:bg-opacity-80 bg-purple-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Mijn werk</div>
          </Link>
          <Link
            href="/start/showcases"
            className="col-span-1 row-span-2 h-40 md:h-72 md:col-span-2 bg-light-blue-custom hover:bg-opacity-80 rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Showcase</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default page;
