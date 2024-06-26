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
              <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                <div className="md:w-1/3">
                  <p>
                    Via deze websites kan je lezen over grafisch ontwerp en
                    illustratie. Het zijn gekende bronnen met goede schrijvers.
                    Vaak werd of wordt er ook een tijdschrift uitgebracht.
                    Sommige websites geven inzicht in de geschiedenis, andere
                    geven een goed beeld van de hedendaagse scene.
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="p-4 flex flex-row flex-wrap gap-4">
                    <a
                      href="https://www.itsnicethat.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      itsnicethat.com
                    </a>
                    <a
                      href="https://www.creativeboom.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      creativeboom.com
                    </a>
                    <a
                      href="https://www.typotalks.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      typotalks.com
                    </a>
                    <a
                      href="https://www.slanted.de/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      slanted.de
                    </a>
                    <a
                      href="https://eyeondesign.aiga.org/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      eyeondesign.aiga.org
                    </a>
                    <a
                      href="https://www.eyemagazine.com/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      eyemagazine.com
                    </a>
                    <a
                      href="https://www.dandad.org/en/d-ad-awards-pencil-winners/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
                    >
                      dandad.org
                    </a>
                    <a
                      href="https://b-i-n-g-o.be/"
                      target="_blank"
                      className="pt-3 pb-3 pl-6 pr-6 rounded-full bg-light-blue-custom underline"
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
                    o.a.: zwartopwit.be, peterprint.be, belprinto.be Tips in
                    Brussel: Click Click Graphics, dit kaartje samengesteld door
                    Grafik Tips voor boekbinden, letterpress, zeefdruk en riso
                    over heel België: Type & Press​​​​​​​ Printen op formaat en
                    papier kranten bij Newspaper Club (Londen)
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ratione recusandae, vero velit impedit animi
                    voluptatum? Neque odit fugiat consectetur adipisci fuga
                    numquam accusamus sunt nostrum impedit unde iure eveniet
                    minima, sed illum! Voluptas autem, voluptate excepturi
                    voluptatum voluptatem animi? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus, dicta sunt. Esse
                    laborum, ipsum fuga, molestias molestiae ad doloremque aut
                    expedita ut consequatur facere ex? Illum nostrum iste
                    ducimus quia porro, explicabo numquam eveniet aspernatur
                    commodi sint tempora doloribus quasi delectus molestias?
                    Cupiditate modi vel unde officia! Inventore alias iste
                    necessitatibus, recusandae cumque eum accusantium ratione
                    incidunt tenetur velit, deserunt ad quisquam tempora
                    veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                    est rem et iusto? Non ab facilis ipsum reiciendis labore!
                  </p>
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
              <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                <div className="md:w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ratione recusandae, vero velit impedit animi
                    voluptatum? Neque odit fugiat consectetur adipisci fuga
                    numquam accusamus sunt nostrum impedit unde iure eveniet
                    minima, sed illum! Voluptas autem, voluptate excepturi
                    voluptatum voluptatem animi? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus, dicta sunt. Esse
                    laborum, ipsum fuga, molestias molestiae ad doloremque aut
                    expedita ut consequatur facere ex? Illum nostrum iste
                    ducimus quia porro, explicabo numquam eveniet aspernatur
                    commodi sint tempora doloribus quasi delectus molestias?
                    Cupiditate modi vel unde officia! Inventore alias iste
                    necessitatibus, recusandae cumque eum accusantium ratione
                    incidunt tenetur velit, deserunt ad quisquam tempora
                    veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                    est rem et iusto? Non ab facilis ipsum reiciendis labore!
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ratione recusandae, vero velit impedit animi
                    voluptatum? Neque odit fugiat consectetur adipisci fuga
                    numquam accusamus sunt nostrum impedit unde iure eveniet
                    minima, sed illum! Voluptas autem, voluptate excepturi
                    voluptatum voluptatem animi? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus, dicta sunt. Esse
                    laborum, ipsum fuga, molestias molestiae ad doloremque aut
                    expedita ut consequatur facere ex? Illum nostrum iste
                    ducimus quia porro, explicabo numquam eveniet aspernatur
                    commodi sint tempora doloribus quasi delectus molestias?
                    Cupiditate modi vel unde officia! Inventore alias iste
                    necessitatibus, recusandae cumque eum accusantium ratione
                    incidunt tenetur velit, deserunt ad quisquam tempora
                    veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                    est rem et iusto? Non ab facilis ipsum reiciendis labore!
                  </p>
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
              <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                <div className="md:w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ratione recusandae, vero velit impedit animi
                    voluptatum? Neque odit fugiat consectetur adipisci fuga
                    numquam accusamus sunt nostrum impedit unde iure eveniet
                    minima, sed illum! Voluptas autem, voluptate excepturi
                    voluptatum voluptatem animi? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus, dicta sunt. Esse
                    laborum, ipsum fuga, molestias molestiae ad doloremque aut
                    expedita ut consequatur facere ex? Illum nostrum iste
                    ducimus quia porro, explicabo numquam eveniet aspernatur
                    commodi sint tempora doloribus quasi delectus molestias?
                    Cupiditate modi vel unde officia! Inventore alias iste
                    necessitatibus, recusandae cumque eum accusantium ratione
                    incidunt tenetur velit, deserunt ad quisquam tempora
                    veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                    est rem et iusto? Non ab facilis ipsum reiciendis labore!
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ratione recusandae, vero velit impedit animi
                    voluptatum? Neque odit fugiat consectetur adipisci fuga
                    numquam accusamus sunt nostrum impedit unde iure eveniet
                    minima, sed illum! Voluptas autem, voluptate excepturi
                    voluptatum voluptatem animi? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus, dicta sunt. Esse
                    laborum, ipsum fuga, molestias molestiae ad doloremque aut
                    expedita ut consequatur facere ex? Illum nostrum iste
                    ducimus quia porro, explicabo numquam eveniet aspernatur
                    commodi sint tempora doloribus quasi delectus molestias?
                    Cupiditate modi vel unde officia! Inventore alias iste
                    necessitatibus, recusandae cumque eum accusantium ratione
                    incidunt tenetur velit, deserunt ad quisquam tempora
                    veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                    est rem et iusto? Non ab facilis ipsum reiciendis labore!
                  </p>
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
