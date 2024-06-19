import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
const Page = () => {
  const recoverPass = async (formData) => {
    "use server";

    const supabase = createClient();
    const { data, error } = await supabase.auth.updateUser({
      password: formData.get("pass1"),
      data: {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
      },
    });

    if (!error) {
      redirect("/start");
    } else {
      redirect("/");
    }

    // const { data, error } = await supabase.auth.updateUser({
    //   password: formData.get("pass1"),
    // });

    // if (!error) {
    //   redirect("/start");
    // } else {
    //   redirect("/");
    // }
  };

  return (
    <div className="bg-yellow-custom w-full h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-4">Nieuw wachtwoord</h2>

        <div>
          <form action={recoverPass} className="flex flex-col">
            {/* <input
              type="text"
              name="firstname"
              placeholder="Voornaam"
              required
              className="pl-3 pt-2 pb-2 rounded-md mb-4"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Achternaam"
              required
              className="pl-3 pt-2 pb-2 rounded-md mb-4"
            /> */}
            <input
              type="password"
              name="pass1"
              placeholder="Nieuw wachtwoord"
              required
              className="pl-3 pt-2 pb-2 rounded-md mb-4"
            />
            <input
              type="password"
              name="pass2"
              placeholder="Bevestig wachtwoord"
              required
              className="pl-3 pt-2 pb-2 rounded-md mb-4"
            />
            <button
              type="submit"
              className={`pt-2 pb-2 pl-7 pr-7 text-white border-solid bg-slate-800 border-slate-800 border-0.25 hover:bg-transparent hover:text-black hover:border-black hover:transition-all duration-700`}
            >
              Wijzig wachtwoord
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
