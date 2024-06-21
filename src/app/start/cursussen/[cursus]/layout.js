import BreadCrumb from "@/components/BreadCrumb";
import Levels from "@/components/Levels";

const layout = async ({ children, params }) => {
  const selectedLevel = params.level || "all";

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
