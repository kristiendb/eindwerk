"use client";

import Chapters from "@/components/Chapters";
import Levels from "@/components/Levels";

const page = () => {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
};
export default page;

// // /pages/page.js

// "use client";

// import { useState } from "react";
// import Chapters from "@/components/Chapters";
// import Levels from "@/components/Levels";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// const Page = () => {
//   const [selectedLevel, setSelectedLevel] = useState("all");

//   return (
//     <>
//       <div className="md:ml-12 md:mr-9 lg:mr-12">
//         <div>
//           <Breadcrumb>
//             <BreadcrumbList className="text-xl">
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/home/cursus">Cursus</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage>Typografie en lettering</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//         <div className="pt-10">
//           <Levels onSelectLevel={setSelectedLevel} />
//         </div>
//         <div>
//           <Chapters selectedLevel={selectedLevel} />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Page;
