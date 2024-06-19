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

const Levels = ({ onSelectLevel }) => {
  const supabase = createClient();
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("all");

  const getLevels = async () => {
    const data = await selectLevels(supabase);
    setLevels(data);
  };

  useEffect(() => {
    getLevels();
  }, [supabase]);

  const handleLevelChange = (value) => {
    setSelectedLevel(value);
    onSelectLevel(value);
  };

  return (
    <div>
      <Select onValueChange={handleLevelChange} value={selectedLevel}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecteer een niveau" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Alle niveaus</SelectItem>
          {levels.map((level) => (
            <SelectItem value={level.id} key={level.id}>
              {level.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Levels;
