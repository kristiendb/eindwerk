import { logout } from "@/app/logout/actions";

const LogoutButton = () => {
  const handleLogout = async (event) => {
    event.preventDefault();
    await logout();
  };

  return (
    <button
      onClick={handleLogout}
      className={`pt-2 pb-2 pl-7 pr-7 ml-auto text-black border-solid border-black border-0.25 hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:transition-all duration-700 `}
    >
      Log out
    </button>
  );
};
export default LogoutButton;
