import StudentsTable from "@/components/StudentsTable";
import InviteUser from "@/components/InviteUser";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { cloneElement } from "react";
const Page = async () => {
  const columns = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "email",
      header: "E-mailadres",
    },
    {
      accessorKey: "firstname",
      header: "Voornaam",
    },
  ];
  const supabase = createClient(true);
  const { data, error } = await supabase.auth.admin.listUsers();
  const { data: userData } = await supabase.auth.getUser();

  let isAdmin = false;

  if (userData?.user?.user_metadata?.role === "admin") {
    isAdmin = true;
  }

  const users = data.users
    .filter(
      (user) =>
        user.id !== "7c05fb61-47c2-4c4f-b7ce-a2fa1d933da7" &&
        user.id !== "39d59bc0-50b5-421b-bb85-d359228929e9"
    )
    .map((user) => ({
      id: user.id,
      email: user.email,
      firstname: user.user_metadata?.firstname,
    }));

  return (
    <>
      {isAdmin && (
        <div>
          <h2 className="text-4xl pb-8">Studenten</h2>
          <div className="mb-6">
            <InviteUser />
          </div>
          <div>{<StudentsTable columns={columns} data={users} />}</div>
        </div>
      )}
    </>
  );
};
export default Page;
