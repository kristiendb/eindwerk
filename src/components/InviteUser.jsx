"use client";
import { inviteUserAction } from "@/functions/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
const InviteUser = () => {
  const [email, setEmail] = useState("");
  const [state, formAction] = useFormState(inviteUserAction, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      setEmail("");
    }
  }, [state]);
  return (
    <div>
      <form action={formAction}>
        <label className="font-semibold mr-4">
          Email:
          <input
            className="border-b-0.25 border-b-black p-1 font-normal focus:outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <input type="hidden" name="path" value={"/start/student"} />
        <SubmitButton label="Uitnodigen" />
      </form>
    </div>
  );
};

export default InviteUser;
