"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { createClient } from "@/utils/supabase/client";
import SubmitButton from "./SubmitButton";

const AddEventDialog = ({ isAdmin, onEventAdded }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const supabase = createClient();
    const { data, error } = await supabase
      .from("agenda")
      .insert([{ title, starttime, endtime, description, link }]);

    if (error) {
      console.error("Insert Error:", error);
    } else {
      if (data && data.length > 0) {
        onEventAdded(data[0]);
      } else {
        console.error("Insert succeeded but no data returned");
      }
      setOpen(false);
    }
    window.location.href = "/start/agenda";
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={starttime}
                  onChange={(e) => setStarttime(e.target.value)}
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
                  value={endtime}
                  onChange={(e) => setEndtime(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <SubmitButton label="Opslaan" />
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  );
};

export default AddEventDialog;
