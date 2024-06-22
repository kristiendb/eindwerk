import { login } from "./actions";
import Link from "next/link";

export default function LoginPage({ searchParams }) {
  const errorMessage = searchParams.error;
  return (
    <>
      <div className="bg-yellow-custom w-full h-screen ">
        <div className="items-center pt-24 pl-12 pr-12 md:w-100 md:ml-40 lg:ml-60 lg:w-100 lg:pt-32">
          <h3 className="font-medium text-4xl pb-5">Aan de slag!</h3>
          <p className="pb-8">
            Cursusmateriaal voor studenten van het atelier Grafisch ontwerp &
            illustratie aan de Sint-Lukas Academie, ingeschreven voor dit
            schooljaar.
          </p>
          <p className="pb-3">
            {errorMessage && (
              <p className="text-red-500 mt-3">{errorMessage}</p>
            )}
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
              <Link href="/wachtwoord-vergeten">
                <p className="mt-4 text-black-600 hover:underline">
                  Wachtwoord vergeten?
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
