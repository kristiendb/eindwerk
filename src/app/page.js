import ButtonGreen from "@/components/ButtonGreen";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = ({ searchParams }) => {
  if (searchParams.type === "recovery" && searchParams.access_token) {
    redirect("/recovery?access_token=" + searchParams.access_token);
  }
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
        <div className="col-span-1 h-80 relative">
          <Image
            src="/Ellen Splinter 2.png"
            alt="Ellen Splinter - vaas"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-1 h-80 relative">
          <Image
            src="/Ine Hendrickx 2.webp"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/Inge Paemen.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-1  h-80 relative">
          <Image
            src="/Orla Verstraeten 2.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-1 h-80 relative">
          <Image
            src="/Bo Billiet 2.webp"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/Inge Pieters 4.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/Laure Baert.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2  h-80 relative">
          <Image
            src="/Véronique De Pauw.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-1  h-80 relative">
          <Image
            src="/Sander Lambrix Expo Open Atelier 2024 Flyer A6-2.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-1  h-80 relative">
          <Image
            src="/Janey Stouten 4.webp"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
