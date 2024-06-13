// "use client";

// import Chapters from "@/components/Chapters";
// import Levels from "@/components/Levels";

// const page = () => {
//   return (
//     <div>
//       <h1>Test Page</h1>
//     </div>
//   );
// };
// export default page;

// import { selectPortfolio } from "@/functions/queries";
// import { createClient } from "@/utils/supabase/server";
// import PortfolioPage from "@/components/PortfolioPage";

// const Page = async () => {
//   const supabase = createClient();
//   const portfolioItems = await selectPortfolio(supabase);

//   return <PortfolioPage portfolioItems={portfolioItems} />;
// };

// export default Page;

import { selectStudents } from "@/functions/queries";
import { createClient } from "@/utils/supabase/server";

const Page = async () => {
  const supabase = createClient();
  const studenten = await selectStudents(supabase);
  // console.log(studenten);
  return (
    <>
      <h2>Studenten</h2>
      <div>
        {studenten.map((student) => (
          <div key={student.userid}>
            <h3>{student.firstname}</h3>
            <p>{student.lastname}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
