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
            Resultaten van oefeningen, opdrachten en vrij werk door studenten
            uit het atelier Grafisch ontwerp & illustratie aan de Sint-Lukas
            Academie in Schaarbeek, sinds 2020.
          </p>
          <Link href="/over-het-atelier">
            <ButtonGreen>Lees Meer</ButtonGreen>
          </Link>
        </div>
        <ImagesLayout
          col={1}
          src={"/Ellen Splinter 2.png"}
          alt="Ellen Splinter - vaas"
        />
        <ImagesLayout
          col={2}
          src={"/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"}
          alt=""
          className="hidden lg:block"
        />
        <ImagesLayout col={1} src={"/Ine Hendrickx 2.webp"} alt="" />
        <ImagesLayout
          col={2}
          src={"/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"}
          alt=""
          className="md:hidden lg:hidden"
        />
        <ImagesLayout col={2} src={"/Inge Paemen.jpg"} alt="" />
        <ImagesLayout col={1} src={"/Orla Verstraeten 2.jpg"} alt="" />
        <ImagesLayout col={1} src={"/Bo Billiet 2.webp"} alt="" />
        <ImagesLayout col={2} src={"/Inge Pieters 4.jpg"} alt="" />
        <ImagesLayout col={2} src={"/Laure Baert.jpg"} alt="" />
        <ImagesLayout col={2} src={"/Véronique De Pauw.png"} alt="" />
        <ImagesLayout
          col={1}
          src={"/Sander Lambrix Expo Open Atelier 2024 Flyer A6-2.png"}
          alt=""
        />
        <ImagesLayout col={1} src={"/Janey Stouten 4.webp"} alt="" />
        {/* <div className="col-span-1 h-80 relative overflow-hidden">
          <Dialog>
            <DialogTrigger>
              <Image
                src="/Ellen Splinter 2.png"
                alt="Ellen Splinter - vaas"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=" transition-all transition-200 hover:scale-110"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ellen Splinter - Vaas</DialogTitle>
              </DialogHeader>
              <Image
                src="/Ellen Splinter 2.png"
                alt="Ellen Splinter - vaas"
                width={800}
                height={600}
                style={{ objectFit: "contain" }}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="col-span-2 h-80 relative hidden lg:block">
          <Image
            src="/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-1 h-80 relative">
          <Image
            src="/Ine Hendrickx 2.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2 h-80 relative md:hidden lg:hidden">
          <Image
            src="/648e8fed-e1be-4563-aaab-758530d29da1_rw_1920.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/Inge Paemen.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-1  h-80 relative">
          <Image
            src="/Orla Verstraeten 2.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-1 h-80 relative">
          <Image
            src="/Bo Billiet 2.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/Inge Pieters 4.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2 h-80 relative">
          <Image
            src="/Laure Baert.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-2  h-80 relative">
          <Image
            src="/Véronique De Pauw.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-1  h-80 relative">
          <Image
            src="/Sander Lambrix Expo Open Atelier 2024 Flyer A6-2.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-span-1  h-80 relative">
          <Image
            src="/Janey Stouten 4.webp"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div> */}
      </div>
    </>
  );
};

export default Page;
