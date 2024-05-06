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
                className="pl-3 rounded-md"
                type="text"
                id="username"
                name="username"
                placeholder="e-mailadres"
              />
              <input
                className="pl-3 rounded-md mt-5"
                type="password"
                id="password"
                name="password"
                placeholder="wachtwoord"
              />
              <button
                className={`mt-9 pt-2 pb-2 pl-7 pr-7 text-black border-solid border-black border-0.25 mr-auto hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700`}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
