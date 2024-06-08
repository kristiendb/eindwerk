import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Theorie from "@/components/Theorie";
import Inleiding from "@/components/Inleiding";
import Oefeningen from "@/components/Oefeningen";
import Opdrachten from "@/components/Opdrachten";
import Voorbeelden from "@/components/Voorbeelden";

const Layout = ({ children, params }) => {
  return (
    <>
      <div className="md:ml-12 md:mr-9 lg:mr-12">
        <>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="font-libre-franklin"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-medium text-xl">
                Inleiding
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                  <div>
                    <Inleiding params={params} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-medium text-xl">
                Theorie
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div className=" w-full ">
                  <Theorie params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-medium text-xl">
                Oefeningen
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div className=" w-full">
                  <Oefeningen params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-medium text-xl">
                Opdrachten
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full">
                  <Opdrachten params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-medium text-xl">
                Voorbeelden
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <Voorbeelden params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      </div>
    </>
  );
};

export default Layout;
