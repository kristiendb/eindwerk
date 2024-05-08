"use client";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-yellow-custom w-full h-screen ">
        <div className="ml-60 w-100 pt-32">
          <h3 className="font-medium text-4xl pb-5">Aan de slag!</h3>
          <p className="pb-11">
            Cursusmateriaal voor studenten van het atelier Grafisch ontwerp &
            illustratie aan de Sint-Lukas Academie, ingeschreven voor dit
            schooljaar.
          </p>
          <div>
            <form className="max-w-60 flex flex-col">
              <input
                className="pl-3 pt-2 pb-2 rounded-md "
                type="text"
                id="username"
                name="username"
                placeholder="e-mailadres"
              />
              <input
                className="pl-3 pt-2 pb-2 rounded-md mt-5"
                type="password"
                id="password"
                name="password"
                placeholder="wachtwoord"
              />
              <Link href="/home">
                <button
                  className={`mt-9 pt-2 pb-2 pl-7 pr-7  text-white border-solid bg-slate-800  border-slate-800 border-0.25 mr-auto hover:bg-transparent hover:text-black hover:border-black hover:transition-all duration-700`}
                >
                  Log in
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
