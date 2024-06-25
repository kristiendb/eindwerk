import { inviteUserAction } from "@/functions/actions";

const InviteUser = () => {
  return (
    <div>
      <form action={inviteUserAction}>
        <label className="font-semibold mr-4">
          Email:
          <input
            className="border-b-0.25 border-b-black p-1 font-normal focus:outline-none"
            type="email"
            name="email"
            required
          />
        </label>
        <input type="hidden" name="path" value={"/start/student"} />
        <button
          type="submit"
          className="border-0.25 border-black bg bg-black text-white hover:bg-white hover:text-black duration-300 rounded-full pt-1 pb-1 pl-3 pr-3"
        >
          Stuur Uitnodiging
        </button>
      </form>
    </div>
  );
};

export default InviteUser;
