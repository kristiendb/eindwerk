import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createClient } from "@/utils/supabase/client";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("agenda")
        .select("id, title, starttime, endtime, description, link");
      if (error) {
        console.error(error);
      } else {
        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.title,
          start: event.starttime,
          end: event.endtime,
          description: event.description,
          link: event.link,
        }));
        setEvents(formattedEvents);
      }
    };

    const checkAdmin = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user?.user_metadata?.role === "admin") {
        setIsAdmin(true);
      }
    };

    fetchEvents();
    checkAdmin();
  }, [supabase]);

  const handleEventClick = (info) => {
    setSelectedEvent({
      id: info.event.id, // Ensure id is set correctly
      ...info.event.extendedProps,
      title: info.event.title,
      starttime: info.event.start,
      endtime: info.event.end,
    });
  };

  const handleDeleteEvent = async () => {
    if (!selectedEvent) return;

    setLoading(true);

    const { error } = await supabase
      .from("agenda")
      .delete()
      .eq("id", selectedEvent.id);

    if (error) {
      console.error(error);
    } else {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setSelectedEvent(null);
      window.location.reload(); // Reload the page after deletion
    }

    setLoading(false);
  };

  return (
    <>
      <div className="md:flex w-full border-b-0.25 border-black">
        <div className="md:w-3/4 md:h-auto w-full h-full pr-5 md:border-r-0.25 md:border-black">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
            height={"auto"}
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }}
            timeZone="Europe/Brussels"
          />
        </div>
        {selectedEvent && (
          <div className="ml-5 md:w-1/4 md:pt-16 pt-6 pb-6">
            <h2 className="text-xl">
              {new Intl.DateTimeFormat("nl-BE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
                .format(new Date(selectedEvent.starttime))
                .replace(/\//g, ".")}
            </h2>
            <p>
              {new Date(selectedEvent.starttime).toLocaleDateString() !==
              new Date(selectedEvent.endtime).toLocaleDateString() ? (
                <>
                  {new Date(selectedEvent.starttime)
                    .toLocaleDateString()
                    .replace(/-/g, ".")}
                  &nbsp;-&nbsp;
                  {new Date(selectedEvent.endtime)
                    .toLocaleDateString()
                    .replace(/-/g, ".")}
                </>
              ) : (
                <>
                  {new Date(selectedEvent.starttime)
                    .toISOString()
                    .substring(11, 16)}
                  &nbsp;-&nbsp;
                  {new Date(selectedEvent.endtime)
                    .toISOString()
                    .substring(11, 16)}
                  &nbsp;uur (UTC)
                </>
              )}
            </p>
            <p>{selectedEvent.title}</p>
            <p>{selectedEvent.description}</p>
            {selectedEvent.link ? (
              <a
                href={selectedEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {selectedEvent.link}
              </a>
            ) : null}
            {isAdmin && (
              <div className="mt-4">
                <button
                  onClick={handleDeleteEvent}
                  className="bg-red-500 text-white p-2 pl-3 pr-3 rounded-full"
                  disabled={loading}
                >
                  {loading ? "Verwijderen..." : "Verwijder"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
