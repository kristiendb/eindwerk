import ButtonGreen from "@/components/ButtonGreen";
import Link from "next/link";
import ImagesLayout from "@/components/ImagesLayout";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Page = () => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-6 md:grid-cols-4 md:gap-4 mt-10">
        <div className="col-span-2 mb-8">
          <p className="w-72 text-xl md:text-lg mb-8">
            Enkele resultaten van oefeningen, opdrachten en vrij werk door
            studenten uit het atelier Grafisch ontwerp & illustratie aan de
            Sint-Lukas Academie in Schaarbeek, sinds 2020.
          </p>
          <Link href="/over-het-atelier">
            <ButtonGreen>Lees Meer</ButtonGreen>
          </Link>
        </div>
        <ImagesLayout
          col={1}
          src={"/Ellen Splinter 2.png"}
          alt="Ellen Splinter"
        />
        <ImagesLayout
          col={2}
          src={"/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"}
          alt=""
          className="hidden lg:block"
        />
        <ImagesLayout
          col={1}
          src={"/Ine Hendrickx 2.webp"}
          alt="Ine Hendrickx"
        />
        <ImagesLayout
          col={2}
          src={"/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"}
          alt=""
          className="md:hidden lg:hidden"
        />
        <ImagesLayout col={2} src={"/Inge Paemen.jpg"} alt="Inge Paemen" />
        <ImagesLayout
          col={1}
          src={"/Orla Verstraeten 2.jpg"}
          alt="Orla Verstraeten"
        />
        <ImagesLayout col={1} src={"/Bo Billiet 2.webp"} alt="Bo Billiet" />
        <ImagesLayout col={2} src={"/Inge Pieters 4.jpg"} alt="Inge Pieters" />
        <ImagesLayout col={2} src={"/Laure Baert.jpg"} alt="Laure Baert" />
        <ImagesLayout
          col={2}
          src={"/Véronique De Pauw.png"}
          alt="Véronique De Pauw"
        />
        <ImagesLayout
          col={1}
          src={"/Sander Lambrix Expo Open Atelier 2024 Flyer A6-2.png"}
          alt="Sander Lambrix"
        />
        <ImagesLayout
          col={1}
          src={"/Janey Stouten 4.webp"}
          alt="Janey Stouten"
        />
      </div>
    </>
  );
};

export default Page;
