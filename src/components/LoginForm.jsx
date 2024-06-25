"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
const LoginForm = ({ login }) => {
  // const state = {msg:""}
  const [state, newLogin] = useFormState(login, {});
  useEffect(() => {
    if (state?.msg === "success") {
      window.location.href = "/start";
    }
  }, [state]);
  return (
    <form action={newLogin} className="max-w-60 flex flex-col">
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
        type="submit"
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
  );
};
export default LoginForm;
