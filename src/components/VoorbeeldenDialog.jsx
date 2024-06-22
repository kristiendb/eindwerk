"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { uploadExampleAction } from "@/functions/actions";
import UploadVoorbeelden from "@/components/UploadVoorbeelden";

const VoorbeeldenDialog = ({ params, id }) => {
  const [state, formAction] = useFormState(uploadExampleAction, {
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
        Upload voorbeeld
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Voorbeeld</DialogTitle>
            <DialogDescription>
              Vul de volgende velden in om de voorbeeld te uploaden.
            </DialogDescription>
          </DialogHeader>
          <UploadVoorbeelden
            formAction={formAction}
            state={state}
            chapterId={id}
            params={params}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default VoorbeeldenDialog;
