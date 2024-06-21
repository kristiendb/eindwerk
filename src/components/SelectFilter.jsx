"use client";
import { filterChapterAction } from "@/functions/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectFilter = ({ levels, selectedLevel }) => {
  return (
    <select
      name="levelId"
      onChange={(e) => {
        e.target.form.requestSubmit();
      }}
      defaultValue={selectedLevel}
      className="border border-black rounded-full p-2 w-52"
    >
      <option value="all">Alle niveaus</option>
      {levels.map((level) => (
        <option value={level.id} key={level.id}>
          {level.name}
        </option>
      ))}
    </select>
  );
};
export default SelectFilter;
