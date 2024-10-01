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
import { deleteChapterAction } from "@/functions/actions";
import DeleteHoofdstukken from "@/components/DeleteHoofdstukken";
import { createClient } from "@/utils/supabase/client";

const DeleteHoofdstukkenDialog = ({ chapter, params, id }) => {
  const [state, formAction] = useFormState(deleteChapterAction, {
    msg: "pending",
  });
  const [open, setOpen] = useState(false);
  const [levels, setLevels] = useState([]);

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
        className="pt-1 pb-1 pl-3 pr-3 bg-beige-custom text-red-600 rounded-full border-0.25 border-beige-custom hover:bg-white hover:text-red-600 hover:border-green hover:border-0.25  hover:transition-all duration-700"
      >
        X
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verwijder het hoofdstuk</DialogTitle>
            <DialogDescription>
              Ben je zeker dat je dit hoofdstuk wil verwijderen?
            </DialogDescription>
          </DialogHeader>
          <DeleteHoofdstukken
            formAction={formAction}
            state={state}
            chapter={chapter}
            params={params}
            id={id}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DeleteHoofdstukkenDialog;
