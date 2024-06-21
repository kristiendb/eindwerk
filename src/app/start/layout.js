import SideNavigation from "@/components/SideNavigation";
import { createClient } from "@/utils/supabase/server";

const layout = async ({ children }) => {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }
  return (
    <>
      <div className="display flex">
        <div className="hidden md:block">
          <SideNavigation isAdmin={isAdmin} />
        </div>
        <section className="w-full pt-8 p-3 md:p-8 mx-auto">{children}</section>
      </div>
    </>
  );
};

export default layout;
