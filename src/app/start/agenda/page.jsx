"use client";
import Calendar from "@/components/Calendar";

const page = () => {
  return (
    <>
      <div className="lg:ml-12 lg:mr-12">
        <h2 className="text-4xl pb-8">Agenda</h2>
        <Calendar />
      </div>
    </>
  );
};
export default page;
