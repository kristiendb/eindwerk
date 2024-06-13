import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const Page = async ({ searchParams }) => {
  if (!searchParams.access_token) {
    redirect("/");
    return;
  }

  const supabase = createClient();

  const { data: user, error } = await supabase.auth.api.getUser(
    searchParams.access_token
  );

  if (error || !user) {
    redirect("/");
    return;
  }

  const recoverPass = async (formData) => {
    "use server";
    const newPassword = formData.get("pass1");
    const confirmPassword = formData.get("pass2");

    if (newPassword !== confirmPassword) {
      return { error: "Passwords do not match" };
    }

    const { data, error } = await supabase.auth.api.updateUser(
      searchParams.access_token,
      { password: newPassword }
    );

    if (error) {
      return { error: error.message };
    }

    redirect("/login");
  };

  return (
    <div>
      <form action={recoverPass}>
        <input type="email" disabled value={user.email} />
        <input type="password" name="pass1" placeholder="New Password" />
        <input type="password" name="pass2" placeholder="Confirm Password" />
        <button type="submit">Wijzig wachtwoord</button>
      </form>
    </div>
  );
};

export default Page;

// import { redirect } from "next/navigation";
// import { createClient } from "@/utils/supabase/server";
// const page = ({ searchParams }) => {
//   const recoverPass = async (formData) => {
//     "use server";
//     formData.get("pass1");
//     const supabase = createClient();
//     const { data, error } = await supabase.auth.api.updateUser(
//       searchParams.access_token,
//       {
//         password: formData.get("pass1"),
//       }
//     );
//     if (!error) {
//       redirect("/login");
//     }
//   };

//   if (!searchParams.access_token) {
//     redirect("/");
//   }
//   return (
//     <div>
//       <form action={recoverPass}>
//         <input type="email" disabled value="info@huppeldepup.be" />
//         <input type="password" name="pass1" />
//         <input type="password" name="pass2" />
//         <button type="submit">Wijzig wachtwoord</button>
//       </form>
//     </div>
//   );
// };
// export default page;
