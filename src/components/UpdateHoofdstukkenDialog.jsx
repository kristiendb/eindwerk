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
import { updateChapterAction } from "@/functions/actions";
import UpdateHoofdstukken from "@/components/UpdateHoofdstukken";
import { createClient } from "@/utils/supabase/client";

const UpdateHoofdstukkenDialog = ({ chapter, params, id }) => {
  const [state, formAction] = useFormState(updateChapterAction, {
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
        className="pt-1 pb-1 pl-3 pr-3 bg-beige-custom text-black rounded-full border-0.25 border-beige-custom hover:bg-white hover:text-black hover:border-green hover:border-0.25  hover:transition-all duration-700"
      >
        Bewerk
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bewerk het hoofdstuk</DialogTitle>
            <DialogDescription>
              Bewerk onderstaande velden om de hoofstukken informatie aan te
              passen.
            </DialogDescription>
          </DialogHeader>
          <UpdateHoofdstukken
            formAction={formAction}
            state={state}
            chapter={chapter}
            params={params}
            id={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default UpdateHoofdstukkenDialog;
