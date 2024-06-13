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
    .eq("level_id", level === "all" ? undefined : level);
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

export const selectStudents = async (supabase) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("isteacher", true);

  if (error) {
    console.error("Error fetching students:", error);
    return null;
  }

  console.log("SelectStudents data:", data); // Voeg extra logging toe

  return data;
};

// export const selectStudents = async (supabase, student) => {
//   let { data } = await supabase
//     .from("users")
//     .select("*")
//     .eq("isteacher", student);
//   return data;
// };

export const selectAllCourses = async (supabase) => {
  // const supabase = createClient();
  let { data, error } = await supabase.from("courses").select("*");
  if (error) throw error;
  return data;
};

export const selectCoursesById = async (supabase, id) => {
  let { data, error } = await supabase.from("courses").select("*").eq("id", id);
  if (error) throw error;
  return data;
};

export const selectChaptersByCourseId = async (supabase, courseId) => {
  let { data, error } = await supabase
    .from("chapters")
    .select("*, level (name), course: courses (color, title, id)")
    .eq("courses_idcourses", courseId);
  if (error) throw error;
  return data;
};

export const selectTheoryByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("theory")
    .select("description, introduction, theorypdf")
    .eq("chapters_idchapters", chapterId)
    .single();
  return data;
};

export const selectTaskByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("tasks")
    .select("title, description, taskpdf, isassignment")
    .eq("chapters_idchapters", chapterId)
    .eq("isassignment", false)
    .single();
  return data;
};

export const selectAssignmentByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("tasks")
    .select("title, description, taskpdf, isassignment")
    .eq("chapters_idchapters", chapterId)
    .eq("isassignment", true)
    .single();
  return data;
};

export const selectExampleByChapterId = async (supabase, chapterId) => {
  const { data } = await supabase
    .from("examples")
    .select("description, exampleimage, id")
    .eq("chapters_idchapters", chapterId);
  return data;
};

export const selectPortfolio = async (supabase) => {
  const { data } = await supabase.from("portfolio").select("*");
  return data;
};

// export const getChapterDetails = async (supabase, chapterSlug, levelSlug) => {
//   const { data: levelData, error: levelError } = await supabase
//     .from("level")
//     .select("id")
//     .ilike("name", levelSlug)
//     .single();

//   if (levelError) {
//     console.error("Error fetching level data:", levelError);
//     return { data: null, error: levelError };
//   }

//   const levelId = levelData.id;

//   const { data: chapterData, error: chapterError } = await supabase
//     .from("chapters")
//     .select("id, title, description, level_idlevel")
//     .ilike("title", chapterSlug)
//     .eq("level_idlevel", levelId)
//     .single();

//   if (chapterError) {
//     console.error("Error fetching chapter data:", chapterError);
//     return { data: null, error: chapterError };
//   }

//   return { data: chapterData, error: null };
// };
