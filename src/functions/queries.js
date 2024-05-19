export const selectCourses = async (supabase) => {
  let { data } = await supabase.from("courses").select("title , slug");
  return data;
};

export const selectLevels = async (supabase) => {
  let { data } = await supabase.from("level").select("*");
  return data;
};

export const selectAllChapters = async (supabase) => {
  let { data } = await supabase.from("chapters").select("*");
  return data;
};

export const selectLevelName = async (supabase, id) => {
  let { data } = await supabase
    .from("level")
    .select("name")
    .eq("idlevel_id", id);
  return data;
};

export const selectUser = async (supabase) => {
  let { data } = await supabase.from("users").select("*");
  return data;
};
