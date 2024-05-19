import { createClient } from "@/utils/supabase/server";

const page = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("no user");
  }

  return <p>Hello {data.user.email}</p>;
};
export default page;
