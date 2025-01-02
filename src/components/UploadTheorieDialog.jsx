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
import { uploadTheoryAction } from "@/functions/actions";
import UploadTheory from "./UploadTheory";

const UploadTheorieDialog = ({ params, id }) => {
  const [state, formAction] = useFormState(uploadTheoryAction, {
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
        Upload theorie
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload theorie</DialogTitle>
            <DialogDescription>
              Vul de volgende velden in om de theorie te uploaden.
            </DialogDescription>
          </DialogHeader>
          <UploadTheory
            formAction={formAction}
            state={state}
            params={params}
            chapterId={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default UploadTheorieDialog;
