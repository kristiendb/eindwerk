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
      <Breadcrumb>
        <BreadcrumbList className="text-xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home/cursus">Cursus</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lay-out en compositie</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};
export default page;
