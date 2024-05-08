import SideNavigation from "@/components/SideNavigation";

const page = () => {
  return (
    <>
      <div className="flex">
        <SideNavigation />
        <div className="mt-14 ml-14 w-full">
          <h2 className="text-4xl pb-8">Welkom, Kristien!</h2>
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-1 h-72 bg-red-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Agenda
            </div>
            <div className="col-span-1 row-span-1 h-72 bg-light-green-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Info
            </div>
            <div className="col-span-2 row-span-1 h-72 bg-yellow-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Cursus
            </div>
            <div className="col-span-2 row-span-1 h-72 bg-purple-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Mijn werk
            </div>
            <div className="col-span-2 row-span-2 h-72 bg-light-blue-custom rounded-3xl pl-6 pt-8 font-bold text-lg">
              Showcase
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
