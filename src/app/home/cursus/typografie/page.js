import Chapters from "@/components/Chapters";
import Levels from "@/components/Levels";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
  return (
    <>
      <div className="md:ml-12 md:mr-9 lg:mr-12">
        <div>
          <Breadcrumb>
            <BreadcrumbList className="text-xl">
              <BreadcrumbItem>
                <BreadcrumbLink href="/home/cursus">Cursus</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Typografie en lettering</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="pt-10">
          <Levels />
        </div>
        <div>
          <Chapters />
        </div>
      </div>
    </>
  );
};
export default page;
