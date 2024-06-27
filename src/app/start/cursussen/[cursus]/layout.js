import BreadCrumb from "@/components/BreadCrumb";
import Levels from "@/components/Levels";

const layout = async ({ children, params }) => {
  const selectedLevel = params.level || "all";

  return (
    <>
      <link rel="icon" href="favicon.svg" />
      <div>
        <BreadCrumb params={params} />
      </div>

      <div>{children}</div>
    </>
  );
};
export default layout;
