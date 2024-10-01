"use client";
import SubmitButton from "./SubmitButton";

const UpdateHoofdstukken = ({ chapter, id, params, formAction, state }) => {
  return (
    <div>
      <form action={formAction}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Titel
          </label>
          <textarea
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            defaultValue={chapter?.title || ""}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Omschrijving
          </label>
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            defaultValue={chapter?.description || ""}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Level
          </label>
          <select
            name="level"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            defaultValue={chapter.level_idlevel || ""}
          >
            <option value="" disabled>
              Select a level
            </option>
            <option value="1">Introductie</option>
            <option value="2">Basisvaardigheden</option>
            <option value="3">Verdieping</option>
            <option value="4">Verfijning</option>
          </select>
        </div>
        <input type="hidden" name="chapterId" value={id} />
        <input
          type="hidden"
          name="path"
          value={"/start/cursussen/" + Object.values(params).join("/")}
        />
        <SubmitButton label="Upload" />
      </form>
    </div>
  );
};

export default UpdateHoofdstukken;
