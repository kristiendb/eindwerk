import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="mt-14 ml-14 mr-9  sm:mt-7 sm:ml-7 sm:mr-4 lg:mr-12">
        <h2 className="text-4xl pb-8">Cursus</h2>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link
            href="/home/cursus/typografie"
            className="col-span-1 row-span-1 h-24 sm:h-40 md:h-72 bg-red-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Typografie en lettering</div>
          </Link>
          <Link
            href="/home/cursus/layout"
            className="col-span-1 row-span-1 h-24 sm:h-40 md:h-72 bg-light-green-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Lay-out en compositie</div>
          </Link>
          <Link
            href="/home/cursus/communicatie"
            className="col-span-1 row-span-1 h-24 sm:h-40 md:h-72 bg-yellow-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Communicatie</div>
          </Link>
          <Link
            href="/home/cursus/concept"
            className="col-span-1 row-span-1  h-24 sm:h-40 md:h-72 bg-purple-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Concept</div>
          </Link>
          <Link
            href="/home/cursus/kleur"
            className="col-span-1  h-24 sm:h-40 md:h-72  bg-light-blue-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Kleur</div>
          </Link>
          <Link
            href="/home/cursus/beelden"
            className="col-span-1  h-24 sm:h-40 md:h-72  bg-beige-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Beelden</div>
          </Link>
          <Link
            href="/home/cursus/productie"
            className="col-span-1  h-24 sm:h-40 md:h-72  bg-pink-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Productie</div>
          </Link>
          <Link
            href="/home/cursus/creativiteit"
            className="col-span-1  h-24 sm:h-40 md:h-72  bg-light-pink-custom rounded-3xl pl-6 pt-8 font-bold text-lg"
          >
            <div>Creativiteit</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default page;
