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
import { updateTaskAction } from "@/functions/actions";
import UpdateOefeningen from "@/components/UpdateOefeningen";

const UpdateOefeningenDialog = ({ params, task, id }) => {
  const [state, formAction] = useFormState(updateTaskAction, {
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
            <DialogTitle>Bewerk de oefening</DialogTitle>
            <DialogDescription>
              Bewerk onderstaande velden om de oefening aan te passen.
            </DialogDescription>
          </DialogHeader>
          <UpdateOefeningen
            formAction={formAction}
            state={state}
            task={task}
            params={params}
            taskId={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default UpdateOefeningenDialog;
