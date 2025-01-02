"use client";
import SubmitButton from "./SubmitButton";

const UpdateResult = ({ work, uploadId, params, formAction, state }) => {
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="uploadId" value={uploadId} />
        <input
          type="hidden"
          name="path"
          value={"/start/cursussen/" + Object.values(params).join("/")}
        />
        <div className="mt-4">
          <label className="block text-sm font-medium">Titel</label>
          <input
            type="text"
            name="title"
            defaultValue={work.title}
            className="mt-1 w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Omschrijving</label>
          <textarea
            name="description"
            defaultValue={work.description}
            className="mt-1 w-full border-gray-300 rounded-md"
          ></textarea>
        </div>
        <SubmitButton label="Update" />
      </form>
    </div>
  );
};

export default UpdateResult;
