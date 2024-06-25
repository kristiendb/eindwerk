import { login } from "./actions";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import Tester from "@/components/Tester";
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
            <LoginForm login={login} />
          </div>
        </div>
      </div>
    </>
  );
}
