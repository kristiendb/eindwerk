// import { createClient } from "@/utils/supabase/server";

export const selectCourses = async (supabase) => {
  let { data } = await supabase.from("courses").select("title , slug, id");
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
    .select("*, level (name), course: courses (slug, title, id)")
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

export const getChapterDetails = async (supabase, chapterSlug, levelSlug) => {
  const { data: levelData, error: levelError } = await supabase
    .from("level")
    .select("id")
    .ilike("name", levelSlug)
    .single();

  if (levelError) {
    console.error("Error fetching level data:", levelError);
    return { data: null, error: levelError };
  }

  const levelId = levelData.id;

  const { data: chapterData, error: chapterError } = await supabase
    .from("chapters")
    .select("id, title, description, level_idlevel")
    .ilike("title", chapterSlug)
    .eq("level_idlevel", levelId)
    .single();

  if (chapterError) {
    console.error("Error fetching chapter data:", chapterError);
    return { data: null, error: chapterError };
  }

  return { data: chapterData, error: null };
};

// export const selectTheoryByChapterId = async (supabase, chapterId) => {
//   let { data, error } = await supabase
//     .from("theory")
//     .select("description, introduction, theorypdf")
//     .eq("chapters_idchapters", chapterId)
//     .single();
//   if (error) throw error;
//   return data;
// };

// export const getChapterDetails = async (supabase, chapterSlug, levelSlug) => {
//   const { data: levelData, error: levelError } = await supabase
//     .from("level")
//     .select("id")
//     .ilike("name", levelSlug)
//     .single();

//   if (levelError) return { error: levelError };

//   const levelId = levelData.id;

//   const { data: chapterData, error: chapterError } = await supabase
//     .from("chapters")
//     .select("id, title, description, level_idlevel")
//     .ilike("title", chapterSlug)
//     .eq("level_idlevel", levelId)
//     .single();

//   if (chapterError) return { error: chapterError };

//   return { data: chapterData };
// };
