import { forgotPassword } from "../login/actions";

export default function Page() {
  return (
    <div className="bg-yellow-custom w-full h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-4">Wachtwoord vergeten?</h2>
        <p className="mb-6">
          Voer je e-mailadres in om een wachtwoord reset link te ontvangen.
        </p>
        <form action={forgotPassword} className="flex flex-col">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e-mailadres"
            className="pl-3 pt-2 pb-2 rounded-md mb-4"
          />
          <button
            type="submit"
            className={`pt-2 pb-2 pl-7 pr-7 text-white border-solid bg-slate-800 border-slate-800 border-0.25 hover:bg-transparent hover:text-black hover:border-black hover:transition-all duration-700`}
          >
            Verstuur reset link
          </button>
        </form>
      </div>
    </div>
  );
}
