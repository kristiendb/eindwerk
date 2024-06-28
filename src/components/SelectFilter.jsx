"use client";
import { filterChapterAction } from "@/functions/actions";

const SelectFilter = ({ levels, selectedLevel }) => {
  return (
    <select
      name="levelId"
      onChange={(e) => {
        e.target.form.requestSubmit();
      }}
      defaultValue={selectedLevel}
      className="border appearance-none border-black  rounded-full pt-2 pb-2 pl-4 pr-4 w-52 cursor-pointer"
    >
      <option value="all" className="text-left">
        - Filter hier op niveau -
      </option>
      {levels.map((level) => (
        <option value={level.id} key={level.id} className="text-left">
          {level.name}
        </option>
      ))}
    </select>
  );
};
export default SelectFilter;
