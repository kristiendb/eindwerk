"use client";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const page = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <>
      <h1>AGENDA</h1>
      <div className="w-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </>
  );
};
export default page;
