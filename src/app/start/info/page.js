import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="lg:ml-12 lg:mr-12">
        <h2 className="text-4xl pb-8">Info</h2>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="font-libre-franklin"
        >
          <AccordionItem
            value="item-1"
            className="border-light-blue-custom border-0.25 rounded-lg pl-2 pr-2"
          >
            <AccordionTrigger className="font-medium text-xl">
              Referenties
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="lg:flex text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
                <div className="lg:w-1/3">
                  <p>
                    Via deze websites kan je lezen over grafisch ontwerp en
                    illustratie. Het zijn gekende bronnen met goede schrijvers.
                    Vaak werd of wordt er ook een tijdschrift uitgebracht.
                    Sommige websites geven inzicht in de geschiedenis, andere
                    geven een goed beeld van de hedendaagse scene.
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <div className="p-4 lg:pt-0 lg:pl-4 lg:pr-4 lg:pb-4 flex flex-row flex-wrap gap-4">
                    <a
                      href="https://www.itsnicethat.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      itsnicethat.com
                    </a>
                    <a
                      href="https://www.creativeboom.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      creativeboom.com
                    </a>
                    <a
                      href="https://www.typotalks.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      typotalks.com
                    </a>
                    <a
                      href="https://www.slanted.de/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      slanted.de
                    </a>
                    <a
                      href="https://eyeondesign.aiga.org/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      eyeondesign.aiga.org
                    </a>
                    <a
                      href="https://www.eyemagazine.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      eyemagazine.com
                    </a>
                    <a
                      href="https://www.dandad.org/en/d-ad-awards-pencil-winners/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      dandad.org
                    </a>
                    <a
                      href="https://b-i-n-g-o.be/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      b-i-n-g-o.be
                    </a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="mt-2 border-light-blue-custom border-0.25 rounded-lg pl-2 pr-2"
          >
            <AccordionTrigger className="font-medium text-xl">
              Printen
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                <div className="md:w-1/3">
                  <p>
                    Testprint, enkel exemplaar? Dan moet je niet naar een
                    drukkerij stappen maar printen. Je kan enkelzijdig printen
                    op de fotoprinters in het atelier, tot A3+. <br /> <br />
                    Er is niets mis met printen in een copy- of printshop. Ook
                    daar kan je creatief mee zijn. Zij kunnen vaak op
                    verschillende papiersoorten en groottes printen,
                    schoonsnijden en binden.
                  </p>
                </div>
                <div className="md:w-2/3 bg-slate-400 h-80"></div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="mt-2 border-light-blue-custom border-0.25 rounded-lg pl-2 pr-2"
          >
            <AccordionTrigger className="font-medium text-xl">
              Drukwerk
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                <div className="md:w-1/2">
                  <p>
                    Wil je een oplage – meer dan een exemplaar – laten
                    uitvoeren, dan kan je bij een drukkerij terecht. Online
                    drukwerk (oplage, meer dan een exemplaar) bestellen bij
                    o.a.:
                    <a
                      href="https://www.zwartopwit.be"
                      target="_blank"
                      className="underline"
                    >
                      zwartopwit.be
                    </a>
                    ,
                    <a
                      href="https://www.peterprint.be"
                      target="_blank"
                      className="underline"
                    >
                      peterprint.be
                    </a>
                    ,
                    <a
                      href="https://www.belprinto.be"
                      target="_blank"
                      className="underline"
                    >
                      belprinto.be
                    </a>
                    . <br /> Tips in Brussel: Click Click Graphics, dit kaartje
                    samengesteld door Grafik Tips voor boekbinden, letterpress,
                    zeefdruk en riso over heel België: Type & Press​​​​​​​
                    Printen op formaat en papier kranten bij Newspaper Club
                    (Londen)
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p></p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="mt-2 border-light-blue-custom border-0.25 rounded-lg pl-2 pr-2"
          >
            <AccordionTrigger className="font-medium text-xl">
              Lettertypes
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="lg:flex text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
                <div className="lg:w-1/3">
                  <p>
                    Gebruik tags, maar vooral ook classificatie en eigenschappen
                    tijdens je zoektocht. Herlees indien nodig de theorie over
                    lettertypes en hun classificatie bij de cursus&nbsp;
                    <a
                      href="https://www.grafisch-ontwerp-en-illustratie.be/start/cursussen/2-typografie-en-lettering/2-lettertypes-introductie"
                      className="underline"
                    >
                      lettertypes introductie
                    </a>
                    .
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <div className="p-4 lg:pt-0 lg:pl-4 lg:pr-4 lg:pb-4 flex flex-row flex-wrap gap-4">
                    <a
                      href="https://fonts.adobe.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Adobe fonts
                    </a>
                    <a
                      href="https://fonts.google.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Google fonts
                    </a>
                    <a
                      href="https://www.fontsquirrel.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Fontsquirrel
                    </a>
                    <a
                      href="https://www.fontspring.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Fontspring
                    </a>
                    <a
                      href="https://open-foundry.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Open Foundry
                    </a>
                    <a
                      href="https://velvetyne.fr/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Velvetyne
                    </a>
                    <a
                      href="https://www.exljbris.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      ExjLibris
                    </a>
                    <a
                      href="https://www.theleagueofmoveabletype.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      The League of Moveable Type
                    </a>
                    <a
                      href="https://usemodify.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Use & Modify
                    </a>
                    <a
                      href="https://fontsinuse.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      fontsinuse.com
                    </a>
                    <a
                      href="https://www.fontbrief.com/fontbrief"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      fontbrief.com
                    </a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="mt-2 border-light-blue-custom border-0.25 rounded-lg pl-2 pr-2"
          >
            <AccordionTrigger className="font-medium text-xl">
              Beelden
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent>
              <div className="lg:flex text-base pb-5 lg:flex-row space-x-0 space-y-8 w-full lg:space-x-12 lg:space-y-0">
                <div className="lg:w-1/3">
                  <p>
                    Via deze links vind je vrij te gebruiken foto&apos;s of
                    icoontjes onder Creative Commons licentie CC0, uit publieke
                    archieven of met vermelding van auteur. Vergeet zelf niet te
                    fotograferen als je dat graag doet. Stockfoto&apos;s zijn
                    handig, maar niet uniek. Je kan deze databases ook gebruiken
                    ter inspiratie wanneer je zelf een icoontje aan het
                    ontwerpen bent: hoe vereenvoudigen, hoe eenheid bewaren in
                    een reeks?
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <div className="p-4 lg:pt-0 lg:pl-4 lg:pr-4 lg:pb-4 flex flex-row flex-wrap gap-4">
                    <a
                      href="https://isorepublic.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      isorepublic
                    </a>
                    <a
                      href="https://www.pexels.com/nl-nl/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      pexels
                    </a>
                    <a
                      href="https://www.splitshire.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      splitshire
                    </a>
                    <a
                      href="https://cupcake.nilssonlee.se/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      cupcake.nilssonlee
                    </a>
                    <a
                      href="https://nos.twnsnd.co/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      nos.twnsnd
                    </a>
                    <a
                      href="https://magdeleine.co/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      magdeleine
                    </a>
                    <a
                      href="https://www.apollo-magazine.com/open-access-image-libraries-a-handy-list/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      Open acces image libraries
                    </a>
                    <a
                      href="https://www.flaticon.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      flaticon
                    </a>
                    <a
                      href="https://thenounproject.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      thenounproject
                    </a>
                    <a
                      href="https://graphicburger.com/icons-set/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom hover:bg-opacity-40 transition-all duration-300 underline"
                    >
                      graphicburger.com
                    </a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
export default page;
