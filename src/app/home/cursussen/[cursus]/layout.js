import BreadCrumb from "@/components/BreadCrumb";

const layout = async ({ children, params }) => {
  return (
    <div>
      <div>
        <BreadCrumb params={params} />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default layout;
