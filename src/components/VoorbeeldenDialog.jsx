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
        className="mt-4 pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full"
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
