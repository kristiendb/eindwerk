import StudentsTable from "@/components/StudentsTable";
import { createClient } from "@/utils/supabase/server";
const Page = async () => {
  const columns = [
    {
      accessorKey: "id",
      header: "id",
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
  const supabase = createClient();
  const { data, error } = await supabase.auth.admin.listUsers();

  // .query("SELECT * FROM auth.users");
  console.log(data);
  return <div>{/* <StudentsTable data={data} columns={columns} /> */}</div>;
};
export default Page;
