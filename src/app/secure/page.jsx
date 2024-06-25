import { createClient } from "@/utils/supabase/server";

const page = async () => {
  "use server";
  const supabase = createClient(true);
  const { data, error } = await supabase.auth.admin.inviteUserByEmail(
    "david.verhulst@inventivemedia.be"
  );
  return (
    <div>
      <pre>data && {JSON.stringify(data, null, 2)}</pre>
      <pre>error && {JSON.stringify(error, null, 2)}</pre>
    </div>
  );
};
export default page;
