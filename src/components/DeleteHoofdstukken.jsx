"use client";
import SubmitButton from "./SubmitButton";

const DeleteHoofdstukken = ({
  chapter,
  id,
  params,
  formAction,
  state,
  setOpen,
}) => {
  return (
    <div>
      <form action={formAction}>
        <div className="flex justify-between">
          <button
            type="button"
            className="pt-1 pb-1 pl-3 pr-3 bg-gray-300 text-black rounded-full hover:bg-gray-400"
            onClick={() => setOpen(false)}
          >
            Annuleer
          </button>
          <input type="hidden" name="chapterId" value={id} />
          <input
            type="hidden"
            name="path"
            value={"/start/cursussen/" + Object.values(params).join("/")}
          />
          <SubmitButton label="Delete" />
        </div>
      </form>
    </div>
  );
};

export default DeleteHoofdstukken;
