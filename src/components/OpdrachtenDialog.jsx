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
        className="mt-4 pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full"
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
