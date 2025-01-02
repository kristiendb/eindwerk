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
import { updateResultAction } from "@/functions/actions";
import UpdateResult from "@/components/UpdateResult";

const UpdateResultDialog = ({ params, work, id }) => {
  const [state, formAction] = useFormState(updateResultAction, {
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
        Bewerken
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bewerk je resultaat</DialogTitle>
            <DialogDescription>
              Bewerk onderstaande velden om je resultaat aan te passen.
            </DialogDescription>
          </DialogHeader>
          <UpdateResult
            formAction={formAction}
            state={state}
            work={work}
            params={params}
            uploadId={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default UpdateResultDialog;
