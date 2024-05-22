import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { createClient } from "@/utils/supabase/client";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("agenda")
        .select("id, title, starttime, endtime, description");
      if (error) {
        console.error(error);
      } else {
        console.log("Fetched events:", data);
        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.title,
          start: event.starttime,
          end: event.endtime,
          description: event.description,
        }));
        setEvents(formattedEvents);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (info) => {
    setSelectedEvent({
      ...info.event.extendedProps,
      title: info.event.title,
      starttime: info.event.start,
      endtime: info.event.end,
    }); // Update the selected event when an event is clicked
  };

  return (
    <>
      <div className="md:flex w-full border-b-0.25 border-black">
        <div className="md:w-3/4 md:h-auto w-full h-full pr-5 md:border-r-0.25  md:border-black">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
          />
        </div>
        {selectedEvent && (
          <div className="ml-5 md:pt-16 pt-6 pb-6">
            <h2 className="text-xl">
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
                .format(new Date(selectedEvent.starttime))
                .replace(/\//g, ".")}
            </h2>
            <p>{selectedEvent.title}</p>
            <p>{selectedEvent.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

//   const [events, setEvents] = useState([]);

//   const handleDateClick = (arg) => {
//     // Add a new event when a date is clicked
//     const newEvent = {
//       title: "New Event",
//       start: arg.dateStr,
//       allDay: true,
//     };
//     setEvents([...events, newEvent]);
//   };

//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, interactionPlugin]}
//       initialView="dayGridMonth"
//       events={events}
//       dateClick={handleDateClick}
//     />
//   );
// };

export default Calendar;
