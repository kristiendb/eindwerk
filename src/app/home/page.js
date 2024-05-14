import SideNavigation from "@/components/SideNavigation";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/app/logout/actions";

const page = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <div className="flex">
        <SideNavigation />
        <div className="mt-14 ml-14 mr-9 w-full sm:mt-7 sm:ml-7 sm:mr-4">
          <h2 className="text-4xl pb-8">Welkom, Kristien!</h2>
          <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1 row-span-1 h-24 sm:h-40 md:h-72 bg-red-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Agenda
            </div>
            <div className="col-span-1 row-span-1 h-24 sm:h-40 md:h-72 bg-light-green-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Info
            </div>
            <div className="col-span-1 row-span-1 lg:col-span-2 h-24 sm:h-40 md:h-72 sm:col-span-1 bg-yellow-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Cursus
            </div>
            <div className="col-span-1 row-span-1 lg:col-span-2 h-24 sm:h-40 md:h-72 sm:col-span-1 bg-purple-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Mijn werk
            </div>
            <div className="col-span-1 row-span-2 h-24 sm:h-40 md:h-72 md:col-span-2 bg-light-blue-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Showcase
            </div>
          </div>
          <form action={logout}>
            <button type="submit">Logout</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default page;
