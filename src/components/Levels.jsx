"use client";
import { selectLevels } from "@/functions/queries";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Levels = () => {
  const supabase = createClient();
  const [levels, setLevels] = useState([]);

  const getLevel = async () => {
    const data = await selectLevels(supabase);
    setLevels(data);
  };

  useEffect(() => {
    getLevel();
  }, []);
  return (
    <>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecteer een niveau" />
          </SelectTrigger>
          <SelectContent>
            {levels &&
              levels.map((level) => (
                <SelectItem value={level.name} key={level.id}>
                  {level.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
export default Levels;
