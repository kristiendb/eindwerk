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
        className="pt-1 pb-1 pl-3 pr-3 bg-beige-custom text-black rounded-full border-0.25 border-beige-custom hover:bg-white hover:text-black hover:border-green hover:border-0.25  hover:transition-all duration-700"
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
          <DialogDescription>
            Pas de inleiding van dit hoofdstuk aan.
          </DialogDescription>
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
