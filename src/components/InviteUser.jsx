import { inviteUserAction } from "@/functions/actions";

const InviteUser = () => {
  return (
    <div>
      <form action={inviteUserAction}>
        <label>
          Email:
          <input
            className="border-0.25 border-black p-2"
            type="email"
            name="email"
            required
          />
        </label>
        <button
          type="submit"
          className="border-0.25 border-black bg bg-slate-300 p-2"
        >
          Stuur Uitnodiging
        </button>
      </form>
    </div>
  );
};

export default InviteUser;
