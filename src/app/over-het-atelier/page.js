import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/components/ui/accordion.css";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Grafisch Ontwerp & Illustratie - Over het atelier</title>
        <meta
          name="description"
          content="De opleiding Grafisch Ontwerp en Illustratie aan de Sint-Lukas Academie Schaarbeek biedt zowel beginners als gevorderden een uitgebreide leerervaring. Of je nu start met de basisvaardigheden op maandag of je verdiept in geavanceerde technieken op dinsdag, onze cursussen helpen je om je creatieve talenten te ontwikkelen. Combineer lessen voor een snellere vooruitgang en ontdek de sterke connectie tussen inhoud en vorm door middel van experimenten en kritische reflectie."
        />
        <meta
          name="keywords"
          content="Grafisch Ontwerp, Illustratie, Sint-Lukas Academie, Schaarbeek, Kunstopleiding, Grafisch ontwerp en illustratie, Typografie, Lettering, Affiches, Boeken, Huisstijlen, Websites"
        />
        <meta name="author" content="Sint-Lukas Academie" />
        <meta
          property="og:title"
          content="Grafisch Ontwerp & Illustratie - Sint-Lukas Academie Schaarbeek"
        />
        <meta
          property="og:description"
          content="De opleiding Grafisch Ontwerp en Illustratie aan de Sint-Lukas Academie Schaarbeek biedt zowel beginners als gevorderden een uitgebreide leerervaring. Of je nu start met de basisvaardigheden op maandag of je verdiept in geavanceerde technieken op dinsdag, onze cursussen helpen je om je creatieve talenten te ontwikkelen. Combineer lessen voor een snellere vooruitgang en ontdek de sterke connectie tussen inhoud en vorm door middel van experimenten en kritische reflectie."
        />
        <meta property="og:image" content="/GO-I_Building.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-row mr-auto gap-12 sm:w-full md:w-3/4 pt-4 ">
        <Image
          src="/GO-I_Building.jpg"
          alt="Grafisch ontwerp & illustratie - Sint-Lukas Academie Schaarbeek"
          width={40}
          height={60}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg"
        />
        <Image
          src="/GO-I_Building-2.jpg"
          alt="Grafisch ontwerp & illustratie - Sint-Lukas Academie Schaarbeek"
          width={40}
          height={60}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hidden lg:block rounded-lg"
        />
      </div>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="font-libre-franklin mt-4 ease-in-out"
      >
        <AccordionItem
          value="item-1"
          className=" border-green-custom border-0.25 rounded-lg pl-2 pr-2 "
        >
          <AccordionTrigger className="font-medium text-xl">
            Introductie
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex text-base lg:w-3/4 pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0 ">
              <div className="lg:w-1/2">
                <p>
                  Binnen de opleiding Grafisch Ontwerp en Illustratie kies je
                  ervoor als starter het vak Grafisch Ontwerp en Illustratie
                  (starters) te volgen op maandag. Heb je meer ervaring, volg je
                  het vak Grafisch Ontwerp en Illustratie (verdieping) op
                  dinsdag. Het is ook mogelijk om de twee avonden te combineren
                  en op die manier sneller in de praktijk te brengen wat je
                  leert.
                  <br />
                  <br />
                  Grafisch ontwerp en illustratie zijn sterk verbonden met de
                  andere kunsten. Ook hier worden kleur, lijn, vorm en andere
                  beeldelementen bewust ingezet. Vaak werkt een ontwerper of
                  illustrator naar opdracht. Dat is geen beperking maar een
                  uitdaging om conceptueel te denken en een eigen beeldtaal te
                  ontwikkelen. Typisch voor dit atelier is het gebruik van
                  typografie en lettering, de aandacht voor lay-out en
                  realisatie. Denk aan affiches, boeken, zines, huisstijlen,
                  websites, …
                </p>
              </div>
              <div className="lg:w-1/2">
                <p>
                  In het atelier ligt de nadruk op experiment, creatief denken
                  en een kritische houding in het ontwerpproces. We proberen
                  immers ontwerpen te maken met een sterke connectie tussen
                  inhoud en vorm, niet enkel mooie plaatjes. Digitale technieken
                  en computervaardigheden zijn belangrijk, maar je gebruikt ze
                  zoals je wil. Mixed media tussen analoge en digitale
                  technieken is uniek aan dit atelier. Adobe Photoshop, Adobe
                  Illustrator en Adobe InDesign komen aan bod.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Aanpak
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex lg:w-3/4 text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
              <div className="lg:w-1/2">
                <p>
                  Heb je geen ervaring, dan volg je het atelier op maandag:
                  Grafisch Ontwerp en Illustratie (starters)
                  <br /> Hier word je begeleid bij je eerste stappen in het
                  atelier of bij het ontdekken van jouw beeldtaal. Introductie
                  tot de grote thema&apos;s van grafisch ontwerp en illustratie
                  staan op de agenda. Je krijgt tijd en ruimte om via oefeningen
                  je basisvaardigheden te ontwikkelen. In opdrachten pas je toe
                  wat je leerde, op een persoonlijke en creatieve manier. <br />
                </p>
                <br />
                INTRODUCTIE & BASIS
                <br />
                <ul className="list-disc list-inside">
                  <li className="pl-2">Voor wie start of wil groeien</li>
                  <li className="pl-2">
                    Focus op basisvaardigheden en mogelijkheden
                  </li>
                  <li className="pl-2">
                    Eigen grafische/illustratieve taal ontdekken
                  </li>
                  <li className="pl-2">Technisch basisvaardigheden</li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <p>
                  Heb je al wat basiskennis, dan volg je het atelier op dinsdag:
                  Grafisch Ontwerp en Illustratie (Verdieping)
                  <br /> Je wordt begeleid bij het verdiepen van jouw beeldtaal
                  en het verfijnen van bijhorende technieken. Je gaat steeds
                  meer eigen concepten realiseren en bouwen aan je portfolio. Er
                  staan ongeveer vier uitstappen op de agenda (overdag, mits
                  lesverplaatsing). Ook een workshop met gastdocent biedt meer
                  inzicht. Via grafische technieken als zeefdruk of risoprint
                  realiseer je ook zelf een ontwerp.
                  <br />
                </p>
                <br /> VERDIEPING & VERFIJNING <br />
                <ul className="list-disc list-inside">
                  <li className="pl-2">Voor wie al ervaring heeft</li>
                  <li className="pl-2">Focus op realisatie en portfolio</li>
                  <li className="pl-2">
                    Eigen grafische/illustratieve taal verdiepen
                  </li>
                  <li className="pl-2">Technisch verfijnen</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Materiaal
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex lg:w-3/4 text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
              <div className="lg:w-1/2">
                <p>
                  In het atelier kan je gebruikmaken van een computer, scanner,
                  tekentablet en printer. Je mag uiteraard op je eigen tablet of
                  laptop werken. Je kan als leerling van de academie voordelig
                  een Adobe Creative Cloud abonnement aankopen voor 1 jaar. Er
                  zijn een paar basis teken- en schildermaterialen aanwezig om
                  uit te proberen. Dit kan je aanvullen met jouw eigen favoriete
                  materialen. Tekenpapier, prints en uitstappen zijn niet
                  inbegrepen in het inschrijvingsgeld.
                </p>
              </div>
              <div className="lg:w-1/2">
                <p></p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Studietraject
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex lg:w-3/4 text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
              <div className="lg:w-1/2">
                <p>
                  Leerlingen die de opleiding Grafisch Ontwerp en Illustratie
                  volgen, kiezen uit een traject van 1 avond/week (lang traject,
                  10 jaar) of 2 avonden/week (middellang traject, 5 jaar).
                  Leerlingen die 1 avond/week volgen, kiezen op basis van hun
                  voorkennis voor een specifieke avond. Opgelet! Voor een
                  overstap tussen deze twee trajecten contacteer je best het
                  onthaal van de academie:&nbsp;
                  <a
                    href="mailto:info.academie@sintlukas.brussels"
                    className="underline"
                  >
                    info.academie@sintlukas.brussels
                  </a>
                  .
                </p>
              </div>
              <div className="lg:w-1/2">
                <p></p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Uurrooster
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex lg:w-3/4 text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
              <div className="lg:w-1/2">
                <p>
                  Elke les gaat door van
                  <span className="font-semibold">17:40 tot 21u</span>.
                </p>
              </div>
              <div className="lg:w-1/2">
                <p></p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Locatie
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex lg:w-3/4 text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
              <div className="lg:w-1/2">
                <p>
                  Het atelier gaat door in de academie:
                  <span className="font-semibold">
                    Groenstraat 156, 1030 Schaarbeek
                  </span>
                </p>
              </div>
              <div className="lg:w-1/2">
                <p></p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-7"
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Contact
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="lg:flex lg:w-3/4 text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
              <div className="lg:w-1/2">
                <p>
                  Heb je vragen over de inschrijvingen, het lessenrooster, …?
                  Contacteer dan het onthaal via&nbsp;
                  <a
                    href="mailto:info.academie@sintlukas.brussels"
                    className="underline"
                  >
                    info.academie@sintlukas.brussels
                  </a>
                </p>
              </div>
              <div className="lg:w-1/2">
                <p>
                  Heb je vragen over het atelier, contacteer dan de leerkracht
                  via&nbsp;
                  <a
                    href="mailto:anne.deboeck@sintlukas.brussels"
                    className="underline"
                  >
                    anne.deboeck@sintlukas.brussels
                  </a>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default page;
