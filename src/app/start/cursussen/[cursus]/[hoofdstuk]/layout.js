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
import { createClient } from "@/utils/supabase/server";
import { selectCoursesById } from "@/functions/queries";

const Layout = async ({ children, params }) => {
  const [id] = params.cursus.split("-");
  const supabase = createClient();
  const course = await selectCoursesById(supabase, id);
  const courseColor = course[0].color;

  return (
    <>
      <div className="mt-4 lg:ml-6 lg:mt-6 lg:mr-12">
        <>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="font-libre-franklin"
          >
            <AccordionItem
              value="item-1"
              className={`border-${courseColor} border-0.25 rounded-lg pl-2 pr-2`}
            >
              <AccordionTrigger className="font-medium text-xl ">
                Inleiding
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="p-4">
                <div className="md:flex text-base pb-5 md:flex-row space-x-0 space-y-8 w-full md:space-x-12 md:space-y-0">
                  <div>
                    <Inleiding params={params} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className={`mt-2 border-${courseColor} border-0.25 rounded-lg pl-2 pr-2`}
            >
              <AccordionTrigger className="font-medium text-xl">
                Theorie
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="p-4">
                <div className=" w-full ">
                  <Theorie params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className={`mt-2 border-${courseColor} border-0.25 rounded-lg pl-2 pr-2`}
            >
              <AccordionTrigger className="font-medium text-xl">
                Oefeningen
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="p-4">
                <div className=" w-full">
                  <Oefeningen params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className={`mt-2 border-${courseColor} border-0.25 rounded-lg pl-2 pr-2`}
            >
              <AccordionTrigger className="font-medium text-xl">
                Opdrachten
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="p-4">
                <div className="w-full">
                  <Opdrachten params={params} />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className={`mt-2 border-${courseColor} border-0.25 rounded-lg pl-2 pr-2`}
            >
              <AccordionTrigger className="font-medium text-xl">
                Voorbeelden
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="p-4">
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
