"use client";
import { uploadTheoryAction } from "@/functions/actions";
import SubmitButton from "./SubmitButton";

const UploadTheory = ({ chapterId, params, formAction, state }) => {
  return (
    <div>
      <form action={formAction}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Omschrijving
          </label>
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            PDF File
          </label>
          <input
            type="file"
            name="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <input type="hidden" name="chapterId" value={chapterId} />
        <input
          type="hidden"
          name="path"
          value={"/start/cursussen/" + Object.values(params).join("/")}
        />
        <SubmitButton label="Opslaan" />
        {/* <button
          type="submit"
          className="bg-black hover:bg-slate-300 hover:text-black  hover:transition-all hover:duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button> */}
      </form>
    </div>
  );
};

export default UploadTheory;

// "use client";
// import { useState } from "react";
// import { createClient } from "@/utils/supabase/client";
// import { Upload } from "tus-js-client";
// import SubmitButton from "./SubmitButton";

// const UploadTheory = ({ chapterId, params, theory }) => {
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("File is required");
//       return;
//     }

//     const supabase = createClient();
//     const {
//       data: { session },
//     } = await supabase.auth.getSession();

//     if (!session) {
//       alert("User is not authenticated");
//       return;
//     }

//     const token = session.access_token;
//     const fileName = Math.random().toString(32).substring(2) + ".pdf";
//     const upload = new Upload(file, {
//       endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/resumable/theory-pdf/public/${fileName}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       retryDelays: [0, 1000, 3000, 5000],
//       onError: function (error) {
//         console.error("Failed to upload file:", error);
//         alert(`Failed to upload file: ${error}`);
//         setUploading(false);
//       },
//       onSuccess: async function () {
//         const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/theory-pdf/${fileName}`;

//         const {
//           data: { user },
//         } = await supabase.auth.getUser();

//         if (user?.user_metadata?.role !== "admin") {
//           throw new Error("Geen admin");
//         }

//         const { data: existingData } = await supabase
//           .from("theory")
//           .select("id")
//           .eq("chapters_idchapters", chapterId)
//           .single();

//         if (existingData) {
//           await supabase
//             .from("theory")
//             .update({ description, theorypdf: fileUrl })
//             .eq("chapters_idchapters", chapterId);
//         } else {
//           await supabase.from("theory").insert([
//             {
//               chapters_idchapters: parseInt(chapterId),
//               description: description,
//               theorypdf: fileUrl,
//             },
//           ]);
//         }

//         // Revalidate or refresh your data here as needed
//         setUploading(false);
//       },
//     });

//     setUploading(true);
//     upload.start();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Omschrijving
//           </label>
//           <textarea
//             name="description"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             PDF File
//           </label>
//           <input
//             type="file"
//             name="file"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <SubmitButton label="Opslaan" disabled={uploading} />
//       </form>
//     </div>
//   );
// };

// export default UploadTheory;
