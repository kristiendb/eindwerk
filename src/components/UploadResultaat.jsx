"use client";
import { uploadResultAction } from "@/functions/actions";
import SubmitButton from "./SubmitButton";

const UploadResultaat = ({ taskId, params }) => {
  return (
    <div>
      <form action={uploadResultAction}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Titel
          </label>
          <input
            name="title"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
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
            Resultaat File
          </label>
          <input
            type="file"
            name="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <p className="text-red-600 text-sm mt-2">
            Bestanden mogen niet groter zijn dan 5MB.
          </p>
        </div>
        <input type="hidden" name="taskId" value={taskId} />
        <input
          type="hidden"
          name="path"
          value={"/start/cursussen/" + Object.values(params).join("/")}
        />
        <SubmitButton label="Upload" />
        {/* <button
          type="submit"
          className="bg-black hover:bg-slate-300 hover:text-black hover:transition-all hover:duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload
        </button> */}
      </form>
    </div>
  );
};

export default UploadResultaat;
