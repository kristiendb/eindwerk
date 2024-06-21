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
import { uploadTasksAction } from "@/functions/actions";
import UploadOefeningen from "@/components/UploadOefeningen";
const OefeningenDialog = ({ params, id }) => {
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
        Upload oefening
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger asChild>
          
        </DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Oefening</DialogTitle>
            <DialogDescription>
              Vul de volgende velden in om de oefening te uploaden.
            </DialogDescription>
            {/* <DialogClose asChild>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </button>
            </DialogClose> */}
          </DialogHeader>
          <UploadOefeningen
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
export default OefeningenDialog;
