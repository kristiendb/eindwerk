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
import { uploadTasksAction } from "@/functions/actions";
import UploadOpdrachten from "@/components/UploadOpdrachten";

const OpdrachtenDialog = ({ params, id }) => {
  const [state, formAction] = useFormState(uploadTasksAction, {
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
        Upload opdracht
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Opdracht</DialogTitle>
            <DialogDescription>
              Vul de volgende velden in om de opdracht te uploaden.
            </DialogDescription>
          </DialogHeader>
          <UploadOpdrachten
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
export default OpdrachtenDialog;
