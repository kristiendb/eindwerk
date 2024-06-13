"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRef } from "react";
import { createClient } from "@/utils/supabase/client"; // Re-initialize Supabase client

const UploadTheory = ({ chapterId }) => {
  const supabase = createClient();
  const descriptionRef = useRef();
  const introductionRef = useRef();
  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const description = descriptionRef.current.value;
    const introduction = introductionRef.current.value;
    const file = fileRef.current.files[0];

    if (!file) {
      alert("Please upload a file");
      return;
    }

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      alert("User not authenticated");
      return;
    }

    console.log("User:", user); // Log user details for debugging

    // Upload file to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("theory-pdf")
      .upload(`public/${file.name}`, file);

    if (uploadError) {
      console.error("Error uploading file:", uploadError);
      alert("Error uploading file");
      return;
    }

    const theorypdf = uploadData.path;

    // Insert new theory data into the database
    const { error: insertError } = await supabase.from("theory").insert([
      {
        description,
        introduction,
        theorypdf,
        chapters_idchapters: chapterId,
      },
    ]);

    if (insertError) {
      console.error("Error inserting data:", insertError);
      alert("Error inserting data");
      return;
    }

    alert("Theorie successfully uploaded!");
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload Theorie</DialogTitle>
        <DialogDescription>
          Vul de volgende velden in om de theorie te uploaden.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            ref={descriptionRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Introduction
          </label>
          <input
            type="text"
            ref={introductionRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            PDF File
          </label>
          <input
            type="file"
            ref={fileRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
      </form>
    </DialogContent>
  );
};

export default UploadTheory;

// "use client";

// import {
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { useRef } from "react";
// import { createClient } from "@/utils/supabase/client";

// const UploadTheory = ({ chapterId }) => {
//   const supabase = createClient();
//   const descriptionRef = useRef();
//   const introductionRef = useRef();
//   const fileRef = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const description = descriptionRef.current.value;
//     const introduction = introductionRef.current.value;
//     const file = fileRef.current.files[0];

//     if (!file) {
//       alert("Please upload a file");
//       return;
//     }

//     // Upload file to Supabase Storage
//     const { data, error } = await supabase.storage
//       .from("theory-pdf")
//       .upload(`public/${file.name}`, file);

//     if (error) {
//       console.error("Error uploading file:", error);
//       return;
//     }

//     const theorypdf = data.Key;

//     // Insert new theory data into the database
//     const { error: insertError } = await supabase.from("theory").insert([
//       {
//         description,
//         introduction,
//         theorypdf,
//         chapters_idchapters: chapterId,
//       },
//     ]);

//     if (insertError) {
//       console.error("Error inserting data:", insertError);
//       return;
//     }

//     alert("Theorie successfully uploaded!");
//   };

//   return (
//     <DialogContent>
//       <DialogHeader>
//         <DialogTitle>Upload Theorie</DialogTitle>
//         <DialogDescription>
//           Vul de volgende velden in om de theorie te uploaden.
//         </DialogDescription>
//       </DialogHeader>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Description
//           </label>
//           <input
//             type="text"
//             ref={descriptionRef}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Introduction
//           </label>
//           <input
//             type="text"
//             ref={introductionRef}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             PDF File
//           </label>
//           <input
//             type="file"
//             ref={fileRef}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Upload
//         </button>
//       </form>
//     </DialogContent>
//   );
// };

// export default UploadTheory;
