import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <>
      <div className="bg-yellow-custom w-full h-screen ">
        <div className="items-center pt-24 pl-12 pr-12 md:ml-60 md:w-100 md:pt-32">
          <h3 className="font-medium text-4xl pb-5">Aan de slag!</h3>
          <p className="pb-11">
            Cursusmateriaal voor studenten van het atelier Grafisch ontwerp &
            illustratie aan de Sint-Lukas Academie, ingeschreven voor dit
            schooljaar.
          </p>
          <div>
            <form className="max-w-60 flex flex-col">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="e-mailadres"
                className="pl-3 pt-2 pb-2 rounded-md "
              />

              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="wachtwoord"
                className="pl-3 pt-2 pb-2 rounded-md mt-5"
              />
              <button
                formAction={login}
                className={`mt-9 pt-2 pb-2 pl-7 pr-7  text-white border-solid bg-slate-800  border-slate-800 border-0.25 mr-auto hover:bg-transparent hover:text-black hover:border-black hover:transition-all duration-700`}
              >
                Log in
              </button>
              <button formAction={signup} className="mr-auto">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { supabase } from "../data/supabaseClient";

// const page = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const sessionUser = supabase.auth.user();
//     setUser(sessionUser);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { user, error } = await supabase.auth.signIn({
//       email,
//       password,
//     });
//     if (error) {
//       alert(error.message);
//     } else {
//       setUser(user);
//     }
//   };
//   return (
//     <>
//       <div className="bg-yellow-custom w-full h-screen ">
//         <div className="ml-60 w-100 pt-32">
//           <h3 className="font-medium text-4xl pb-5">Aan de slag!</h3>
//           <p className="pb-11">
//             Cursusmateriaal voor studenten van het atelier Grafisch ontwerp &
//             illustratie aan de Sint-Lukas Academie, ingeschreven voor dit
//             schooljaar.
//           </p>
//           <div>
//             <form className="max-w-60 flex flex-col" onSubmit={handleLogin}>
//               <input
//                 className="pl-3 pt-2 pb-2 rounded-md "
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="e-mailadres"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 className="pl-3 pt-2 pb-2 rounded-md mt-5"
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="wachtwoord"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className={`mt-9 pt-2 pb-2 pl-7 pr-7  text-white border-solid bg-slate-800  border-slate-800 border-0.25 mr-auto hover:bg-transparent hover:text-black hover:border-black hover:transition-all duration-700`}
//               >
//                 Log in
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default page;
