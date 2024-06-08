import { createClient } from "@/utils/supabase/server";
import { selectCoursesById } from "@/functions/queries";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = async ({ params }) => {
  const [id] = params.cursus.split("-");
  // const [hoofdstuk] = params.hoofdstuk?.split("-");
  const supabase = createClient();
  const courses = await selectCoursesById(supabase, id);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home/cursus">Cursus</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{courses[0].title}</BreadcrumbPage>
          </BreadcrumbItem>
          {/* {hoofdstuk && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{hoofdstuk}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )} */}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};
export default BreadCrumb;
