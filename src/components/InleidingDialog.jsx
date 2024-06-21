"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { updateIntroductionAction } from "@/functions/actions";
import UpdateInleiding from "./UpdateInleiding";

const InleidingDialog = ({ params, id, theory }) => {
  const [state, formAction] = useFormState(updateIntroductionAction, {
    msg: "pending",
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (state.msg === "success") {
      setOpen(false);
    }
  }, [state]);
  return (
    <div>
      <button
        onClick={(e) => {
          setOpen(true);
        }}
        className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full"
      >
        Wijzig Inleiding
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Wijzig Inleiding
              {/* {theory?.introduction
                  ? "Bewerk Introductie"
                  : "Voeg Introductie Toe"} */}
            </DialogTitle>
          </DialogHeader>
          <UpdateInleiding
            formAction={formAction}
            state={state}
            params={params}
            theory={theory}
            id={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default InleidingDialog;
