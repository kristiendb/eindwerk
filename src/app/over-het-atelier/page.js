import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <>
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl">
            Introductie
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
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
              <div className="w-1/2 md:w-3/4">
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
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-medium text-xl">
            Aanpak
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
                <p>
                  Heb je geen ervaring, dan volg je het atelier op maandag:
                  Grafisch Ontwerp en Illustratie (starters)
                  <br /> Hier word je begeleid bij je eerste stappen in het
                  atelier of bij het ontdekken van jouw beeldtaal. Introductie
                  tot de grote thema's van grafisch ontwerp en illustratie staan
                  op de agenda. Je krijgt tijd en ruimte om via oefeningen je
                  basisvaardigheden te ontwikkelen. In opdrachten pas je toe wat
                  je leerde, op een persoonlijke en creatieve manier. <br />{" "}
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
              <div className="w-1/2 md:w-3/4">
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
      </Accordion>
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-medium text-xl">
            Materiaal
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
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
              <div className="w-1/2 md:w-3/4">
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
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl">
            Studietraject
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
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
              <div className="w-1/2 md:w-3/4">
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
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl">
            Uurrooster
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
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
              <div className="w-1/2 md:w-3/4">
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
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl">
            Locatie
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
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
              <div className="w-1/2 md:w-3/4">
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
      <Accordion type="single" collapsible className="font-libre-franklin">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl">
            Contact
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-10 w-3/4 pb-5 md:flex-col md:space-x-0 md:w-full md:space-y-8">
              <div className="w-1/2 md:w-3/4">
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
              <div className="w-1/2 md:w-3/4">
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
