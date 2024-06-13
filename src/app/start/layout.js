import SideNavigation from "@/components/SideNavigation";

const layout = ({ children }) => {
  return (
    <>
      <div className="display flex">
        <div className="hidden md:block">
          <SideNavigation />
        </div>
        <section className="w-full pt-8 p-3 md:p-8 mx-auto">{children}</section>
      </div>
    </>
  );
};

export default layout;
