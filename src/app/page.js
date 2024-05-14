import ButtonGreen from "@/components/ButtonGreen";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-6 md:grid-cols-4 md:gap-4 mt-10">
        <div className="col-span-2 mb-8">
          <p className="w-72 text-xl md:text-lg mb-8">
            Resultaten van oefeningen, opdrachten en vrij werk door studenten
            uit het atelier Grafisch ontwerp & illustratie aan de Sint-Lukas
            Academie in Schaarbeek, sinds 2020.
          </p>
          <Link href="/over-het-atelier">
            <ButtonGreen>Lees Meer</ButtonGreen>
          </Link>
        </div>
        <div className="col-span-1 bg-slate-200 h-80"></div>
        <div className="col-span-2 bg-slate-200 h-80"></div>
        <div className="col-span-1 bg-slate-200 h-80"></div>
        <div className="col-span-2 bg-slate-200 h-80"></div>
        <div className="col-span-1 bg-slate-200 h-80"></div>
        <div className="col-span-1 bg-slate-200 h-80"></div>
        <div className="col-span-2 bg-slate-200 h-80"></div>
        <div className="col-span-2 bg-slate-200 h-80"></div>
        <div className="col-span-2 bg-slate-200 h-80"></div>
        <div className="col-span-1 bg-slate-200 h-80"></div>
        <div className="col-span-1 bg-slate-200 h-80"></div>
      </div>
    </>
  );
};

export default Page;
