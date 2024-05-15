import SideNavigation from "@/components/SideNavigation";

const layout = ({ children }) => {
  return (
    <>
      <div className="display flex">
        <SideNavigation />
        <section className="p-8 w-full">{children}</section>
      </div>
    </>
  );
};

export default layout;
