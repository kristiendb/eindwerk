export const selectCourses = async (supabase) => {
  let { data } = await supabase.from("courses").select("title , color, id");
  return data;
};

export const selectLevels = async (supabase) => {
  let { data } = await supabase.from("level").select("*");
  return data;
};
export const selectChaptersByLevel = async (supabase, level) => {
  const { data, error } = await supabase
    .from("chapters")
    .select("*")
    .eq("level_id", level === "all" ? undefined : level)
    .order("title", { ascending: true })
    .order("level_idlevel", { ascending: true });
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

export const selectUser = async (supabase, userId) => {
  let { data } = await supabase
    .from("users")
    .select("*")
    .eq("userid", userId)
    .single();
  return data;
};

export const selectAllCourses = async (supabase) => {
  let { data, error } = await supabase.from("courses").select("*");
  if (error) throw error;
  return data;
};

export const selectCoursesById = async (supabase, id) => {
  let { data, error } = await supabase.from("courses").select("*").eq("id", id);
  if (error) throw error;
  return data;
};

export const selectChaptersByCourseId = async (
  supabase,
  courseId,
  searchParams
) => {
  let query = supabase
    .from("chapters")
    .select("*, level (name), course: courses (color, title, id)")
    .eq("courses_idcourses", courseId);

  if (searchParams.levelId && searchParams.levelId !== "all") {
    query = query.eq("level_idlevel", searchParams.levelId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const selectTheoryByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("theory")
    .select("id,description, theorypdf")
    .eq("chapters_idchapters", chapterId);
  // .single();
  return data;
};

// export const selectTheoryIntroductionByChapterId = async (
//   supabase,
//   chapterId
// ) => {
//   const { data } = await supabase
//     .from("theory")
//     .select("id, introduction")
//     .eq("chapters_idchapters", chapterId)
//     .single(); // Aangezien je maar één introductie/beschrijving verwacht.

//   return data;
// };

export const selectIntroductionByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("chapters")
    .select("id, introduction")
    .eq("id", chapterId)
    .single();

  return data;
};

export const selectTaskByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("tasks")
    .select("id,title, description, taskpdf, isassignment")
    .eq("chapters_idchapters", chapterId)
    .eq("isassignment", false);
  return data;
};

export const selectAssignmentByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("tasks")
    .select("*")
    .eq("chapters_idchapters", chapterId)
    .eq("isassignment", true);
  return data;
};

export const selectExampleByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("examples")
    .select("*")
    .eq("chapters_idchapters", chapterId);
  return data;
};

export const selectWorkByTaskId = async (supabase, taskId) => {
  const { data } = await supabase
    .from("work")
    .select("*")
    .eq("tasks_idtasks", taskId);
  return data;
};

export const selectWorkByUserId = async (supabase, userId) => {
  const { data, error } = await supabase
    .from("work")
    .select(
      `
      *,
      tasks (
        title,
        chapters ( title, level (
            name
          ) )
      )
    `
    )
    .eq("users_userid", userId);

  if (error) console.error("Error loading work data:", error);
  return data;
};

// export const selectWorkByUserId = async (supabase, userId) => {
//   const { data } = await supabase
//     .from("work")
//     .select("*")
//     .eq("users_userid", userId);
//   return data;
// };

export const selectWorkByFeedback = async (supabase) => {
  const { data } = await supabase.from("work").select("*").is("feedback", null);
  return data;
};

export const selectWorkByShowcase = async (supabase) => {
  const { data } = await supabase
    .from("work")
    .select("*")
    .eq("isshowcase", true);
  return data;
};

export const selectPortfolio = async (supabase) => {
  const { data } = await supabase.from("portfolio").select("*");
  return data;
};
