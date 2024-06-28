import { selectLevels } from "@/functions/queries";
import { createClient } from "@/utils/supabase/server";
import { filterChapterAction } from "@/functions/actions";
import SelectFilter from "@/components/SelectFilter";

const Levels = async ({ selectedLevel }) => {
  const supabase = createClient();
  const levels = await selectLevels(supabase);
  return (
    <form action={filterChapterAction}>
      <SelectFilter selectedLevel={selectedLevel} levels={levels} />
    </form>
  );
};

export default Levels;
