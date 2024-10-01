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
          src={"/Véronique De Pauw 2.jpg"}
          alt="Véronique De Pauw"
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
          src={"/Sander Lambrix  Expo Open Atelier 2024 Flyer A6-1.png"}
          alt="Sander Lambrix"
        />
        <ImagesLayout
          col={1}
          src={"/Ine Hendrickx 2.png"}
          alt="Ine Hendrickx"
          className="hidden md:block"
        />
        <ImagesLayout
          col={2}
          src={"/Goele Pipeleers.png"}
          alt="Goele Pipeleers"
          className="hidden lg:block"
        />
        <ImagesLayout col={2} src={"/Laure Baert 2.png"} alt="Laure Baert" />
        <ImagesLayout
          col={1}
          src={"/Margaux Bertier.png"}
          alt="Margaux Bertier"
        />
        <ImagesLayout
          col={1}
          src={"/Karen Vannieuwenhuyze.webp"}
          alt="Karen Vannieuwenhuyze"
        />
        <ImagesLayout
          col={1}
          src={"/Pauline Pittevils.jpg"}
          alt="Pauline Pittevils"
        />
        <ImagesLayout
          col={1}
          src={"/Janey Stouten 2.png"}
          alt="Janey Stouten"
        />
        <ImagesLayout
          col={1}
          src={"/Sabrina Tarquini 8.webp"}
          alt="Sabrina Tarquini"
        />
        <ImagesLayout
          col={1}
          src={"/Ine Hendrickx 2.png"}
          alt="Ine Hendrickx"
          className=" md:hidden"
        />
        <ImagesLayout col={2} src={"/Ine Muys.JPG"} alt="Ine Muys" />
        <ImagesLayout
          col={1}
          src={"/Sarah De Clippele.jpg"}
          alt="Sarah De Clippele"
        />
        <ImagesLayout col={1} src={"/IMG_1561.JPG"} alt="" />
        <ImagesLayout
          col={1}
          src={"/Sander Lambrix 4.jpg"}
          alt="Sander Lambrix"
        />
        <ImagesLayout
          col={1}
          src={"/Sabrina Tarquini 2.jpg"}
          alt="Sabrina Tarquini"
        />
        <ImagesLayout
          col={1}
          src={"/Pauline Pittevils.jpg"}
          alt="Pauline Pittevils"
        />
        <ImagesLayout
          col={1}
          src={"/Anke Van den Bremt 2.webp"}
          alt="Anke Van den Bremt"
        />
        <ImagesLayout col={2} src={"/Inge Pieters.jpg"} alt="Inge Pieters" />
        <ImagesLayout
          col={2}
          src={"/Janey Stouten 3.jpg"}
          alt="Janey Stouten"
        />
        <ImagesLayout
          col={2}
          src={"/Sabrina Tarquini 7.webp"}
          alt="Sabrina Tarquini"
        />
        <ImagesLayout
          col={1}
          src={"/Orla Verstraeten 2.jpg"}
          alt="Orla Verstraeten"
        />
        <ImagesLayout
          col={1}
          src={"/Orla Verstraeten 3.jpg"}
          alt="Orla Verstraeten"
        />
        <ImagesLayout
          col={1}
          src={"/Orla Verstraeten.jpg"}
          alt="Orla Verstraeten"
        />
        <ImagesLayout
          col={1}
          src={"/Ellen Splinter 3.jpg"}
          alt="Ellen Splinter"
        />
        <ImagesLayout
          col={1}
          src={"/Anke Van den Bremt.webp"}
          alt="Anke Van den Bremt"
        />
        <ImagesLayout
          col={1}
          src={"/Ineke Tavernier 2.jpg"}
          alt="Ineke Tavernier"
        />
        <ImagesLayout
          col={2}
          src={"/Ineke Tavernier.png"}
          alt="Ineke Tavernier"
        />
        <ImagesLayout
          col={1}
          src={"/groepswerk 2023.jpg"}
          alt="groepswerk 2023"
        />
        <ImagesLayout col={1} src={"/Nina Ceuppens.png"} alt="Nina Ceuppens" />
        <ImagesLayout col={2} src={"/Liza Ermakova.png"} alt="Liza Ermakova" />
        <ImagesLayout
          col={1}
          src={"/Sabrina Tarquini.png"}
          alt="Sabrina Tarquini"
        />
        <ImagesLayout
          col={1}
          src={"/Sander Lambrix 2.webp"}
          alt="Sander Lambrix"
        />
        <ImagesLayout
          col={1}
          src={"/Sander Lambrix.webp"}
          alt="Sander Lambrix"
        />
        <ImagesLayout col={1} src={"/Myrna Baks.png"} alt="Myrna Baks" />
        <ImagesLayout
          col={1}
          src={"/Liza Ermakova 2.png"}
          alt="Liza Ermakova"
        />
        <ImagesLayout
          col={1}
          src={"/Sophie Bourgeois.jpg"}
          alt="Sophie Bourgeois"
        />
        <ImagesLayout col={2} src={"/Shana Nicaise.JPG"} alt="Shana Nicaise" />
        <ImagesLayout
          col={2}
          src={"/Leendert Plaetinck.jpg"}
          alt="Leendert Plaetinck"
        />
        <ImagesLayout col={1} src={"/Inge Pieters 3.jpg"} alt="Inge Pieters" />
        <ImagesLayout col={1} src={"/Bo Billiet.webp"} alt="Bo Billiet" />
        <ImagesLayout
          col={2}
          src={"/Goele Pipeleers.png"}
          alt="Goele Pipeleers"
          className="lg:hidden md:block"
        />
      </div>
    </>
  );
};

export default Page;
