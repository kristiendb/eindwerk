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
import { uploadFeedbackAction } from "@/functions/actions";
import UploadFeedback from "@/components/UploadFeedback";

const FeedbackDialog = ({ workId }) => {
  const [state, formAction] = useFormState(uploadFeedbackAction, {
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
        className="mt-4 pt-3 pb-3 pl-6 pr-6 bg-yellow-custom text-black rounded-full"
      >
        Feedback toevoegen
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Feedback toevoegen</DialogTitle>
            <DialogDescription>
              Vul de volgende velden in om feedback toe te voegen.
            </DialogDescription>
          </DialogHeader>
          <UploadFeedback
            formAction={formAction}
            state={state}
            workId={workId}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedbackDialog;
