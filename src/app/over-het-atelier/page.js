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
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="font-libre-franklin mt-4"
      >
        <AccordionItem
          value="item-1"
          className=" border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Introductie
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="md:flex text-base md:w-3/4 pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
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
            <div className="md:flex md:w-3/4 text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Heb je geen ervaring, dan volg je het atelier op maandag:
                  Grafisch Ontwerp en Illustratie (starters)
                  <br /> Hier word je begeleid bij je eerste stappen in het
                  atelier of bij het ontdekken van jouw beeldtaal. Introductie
                  tot de grote thema&apos;s van grafisch ontwerp en illustratie
                  staan op de agenda. Je krijgt tijd en ruimte om via oefeningen
                  je basisvaardigheden te ontwikkelen. In opdrachten pas je toe
                  wat je leerde, op een persoonlijke en creatieve manier. <br />{" "}
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
                </p>
              </div>
              <div className="md:w-1/2">
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
                  <br /> VERDIEPING & VERFIJNING <br />
                  <ul className="list-disc list-inside">
                    <li className="pl-2">Voor wie al ervaring heeft</li>
                    <li className="pl-2">Focus op realisatie en portfolio</li>
                    <li className="pl-2">
                      Eigen grafische/illustratieve taal verdiepen
                    </li>
                    <li className="pl-2">Technisch verfijnen</li>
                  </ul>
                </p>
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
            <div className="md:flex md:w-3/4 text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
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
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Studietraject
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="md:flex md:w-3/4 text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
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
          className="mt-2 border-green-custom border-0.25 rounded-lg pl-2 pr-2"
        >
          <AccordionTrigger className="font-medium text-xl">
            Uurrooster
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="md:flex md:w-3/4 text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
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
            <div className="md:flex md:w-3/4 text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
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
            <div className="md:flex md:w-3/4 text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
                </p>
              </div>
              <div className="md:w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  ratione recusandae, vero velit impedit animi voluptatum? Neque
                  odit fugiat consectetur adipisci fuga numquam accusamus sunt
                  nostrum impedit unde iure eveniet minima, sed illum! Voluptas
                  autem, voluptate excepturi voluptatum voluptatem animi? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Possimus,
                  dicta sunt. Esse laborum, ipsum fuga, molestias molestiae ad
                  doloremque aut expedita ut consequatur facere ex? Illum
                  nostrum iste ducimus quia porro, explicabo numquam eveniet
                  aspernatur commodi sint tempora doloribus quasi delectus
                  molestias? Cupiditate modi vel unde officia! Inventore alias
                  iste necessitatibus, recusandae cumque eum accusantium ratione
                  incidunt tenetur velit, deserunt ad quisquam tempora
                  veritatis, doloremque nostrum ipsa quae. Quidem consectetur
                  est rem et iusto? Non ab facilis ipsum reiciendis labore!
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
