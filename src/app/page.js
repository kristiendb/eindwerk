import ButtonGreen from "@/components/ButtonGreen";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="mt-10">
        <p className="w-72 text-lg mb-8">
          Resultaten van oefeningen, opdrachten en vrij werk door studenten uit
          het atelier Grafisch ontwerp & illustratie aan de Sint-Lukas Academie
          in Schaarbeek, sinds 2020.
        </p>
        <Link href="/over-het-atelier">
          <ButtonGreen>Lees Meer</ButtonGreen>
        </Link>
      </div>
    </>
  );
};

export default Page;
