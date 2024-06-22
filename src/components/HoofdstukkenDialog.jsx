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
import { addChapterAction } from "@/functions/actions";
import UploadHoofdstukken from "@/components/UploadHoofdstukken";
import { selectLevels } from "@/functions/queries";
import { createClient } from "@/utils/supabase/client";

const HoofdstukkenDialog = ({ params, id }) => {
  const [state, formAction] = useFormState(addChapterAction, {
    msg: "pending",
  });
  const [open, setOpen] = useState(false);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const supabase = createClient();
      const levels = await selectLevels(supabase);
      setLevels(levels);
    };

    fetchLevels();
  }, []);

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
        Voeg hoofdstuk toe
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Voeg een hoofdstuk toe</DialogTitle>
            <DialogDescription>
              Vul de volgende velden in om een hoofdstuk toe te voegen.
            </DialogDescription>
          </DialogHeader>
          <UploadHoofdstukken
            formAction={formAction}
            state={state}
            courseId={id}
            params={params}
            levels={levels}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default HoofdstukkenDialog;
