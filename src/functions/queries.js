export const selectCourses = async (supabase) => {
  let { data } = await supabase.from("courses").select("title , slug");
  return data;
};

export const selectLevels = async (supabase) => {
  let { data } = await supabase.from("level").select("*");
  return data;
};

export const selectAllChapters = async (supabase) => {
  let { data } = await supabase.from("chapters").select(`*, level(name)`);
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

export const selectAllCourses = async (supabase) => {
  let { data, error } = await supabase.from("courses").select("*");
  if (error) throw error;
  return data;
};

export const selectChaptersByCourseId = async (supabase, courseId) => {
  let { data, error } = await supabase
    .from("chapters")
    .select("*, level (name), course: courses (slug, title)")
    .eq("courses_idcourses", courseId);
  if (error) throw error;
  return data;
};

export const selectTheoryByChapterId = async (supabase, chapterId) => {
  let { data, error } = await supabase
    .from("theory")
    .select("*, chapter: chapters (title)")
    .eq("chapters_idchapters", chapterId);
  if (error) throw error;
  return data;
};
