"use client";
import { useState, useEffect } from "react";
import AddEventDialog from "@/components/AddEventDialog";
import Calendar from "@/components/Calendar";
import { createClient } from "@/utils/supabase/client";

const Page = () => {
  const [events, setEvents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("agenda").select("*");
      if (error) {
        console.error(error);
      } else {
        setEvents(data);
      }
    };

    const fetchUserRole = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.user_metadata.role === "admin") {
        setIsAdmin(true);
      }
    };

    fetchEvents();
    fetchUserRole();
  }, []);

  const handleEventAdded = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <>
      <div className="lg:ml-12 lg:mr-12">
        <h2 className="text-4xl pb-8">Agenda</h2>
        <Calendar events={events} />
        <AddEventDialog isAdmin={isAdmin} onEventAdded={handleEventAdded} />
      </div>
    </>
  );
};

export default Page;
