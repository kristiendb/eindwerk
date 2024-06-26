"use client";
import { uploadTheoryAction } from "@/functions/actions";
import SubmitButton from "./SubmitButton";

const UploadTheory = ({ chapterId, params, theory }) => {
  return (
    <div>
      <form action={uploadTheoryAction}>
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
