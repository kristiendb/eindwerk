"use client";
import SubmitButton from "./SubmitButton";

const UploadHoofdstukken = ({
  courseId,
  params,
  formAction,
  state,
  levels,
}) => {
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
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Niveau
          </label>
          <select
            name="levelId"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Selecteer een niveau</option>
            {levels.map((level) => (
              <option value={level.id} key={level.id}>
                {level.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Afbeelding
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <input type="hidden" name="courseId" value={courseId} />
        <input
          type="hidden"
          name="path"
          value={"/start/cursussen/" + Object.values(params).join("/")}
        />
        <SubmitButton label="Upload" />
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

export default UploadHoofdstukken;
