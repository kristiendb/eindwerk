import SubmitButton from "./SubmitButton";
const UpdateInleiding = ({ theory, id, params, formAction, state }) => {
  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="path"
        value={"/start/cursussen/" + Object.values(params).join("/")}
      />
      <textarea
        name="introduction"
        defaultValue={theory?.introduction || ""}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      ></textarea>
      <input type="hidden" name="chapterId" value={id} />
      <SubmitButton label="Opslaan" />
      {/* <button
        type="submit"
        className="mt-4 bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Opslaan
      </button> */}
    </form>
  );
};
export default UpdateInleiding;
