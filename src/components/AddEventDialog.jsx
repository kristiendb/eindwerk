import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"; // Zorg ervoor dat je een dialoog component hebt
import { useFormState } from "react-dom";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/router";

const AddEventDialog = ({ isAdmin, onEventAdded }) => {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(null, { msg: "pending" });
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const starttime = formData.get("starttime");
    const endtime = formData.get("endtime");
    const description = formData.get("description");
    const link = formData.get("link");

    const supabase = createClient();
    const { data, error } = await supabase
      .from("agenda")
      .insert([{ title, starttime, endtime, description, link }]);

    if (error) {
      console.error(error);
    } else {
      onEventAdded(data[0]);
      setOpen(false);
    }
  };

  return (
    isAdmin && (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full"
        >
          Voeg Evenement Toe
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Voeg Evenement Toe</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Titel
                </label>
                <input
                  type="text"
                  name="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Starttijd
                </label>
                <input
                  type="datetime-local"
                  name="starttime"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Eindtijd
                </label>
                <input
                  type="datetime-local"
                  name="endtime"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Beschrijving
                </label>
                <textarea
                  name="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Link
                </label>
                <input
                  type="url"
                  name="link"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-slate-300 hover:text-black hover:transition-all hover:duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Opslaan
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  );
};

export default AddEventDialog;
