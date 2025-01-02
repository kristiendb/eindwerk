"use server";

import "server-only";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "sonner";
// import { Upload } from "tus-js-client";

export async function deleteTheoryAction(formData) {
  const supabase = createClient();
  const theorieId = formData.get("theorieId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }
  try {
    const { data, error } = await supabase
      .from("theory")
      .delete()
      .eq("id", parseInt(theorieId));
  } catch (error) {
    console.log("Delete error:", error);
  }

  revalidatePath(formData.get("path"));
}

export async function deleteChapterAction(state, formData) {
  const supabase = createClient();
  const chapterId = formData.get("chapterId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }
  try {
    const { data, error } = await supabase
      .from("chapters")
      .delete()
      .eq("id", parseInt(chapterId));
  } catch (error) {
    console.log("Delete error:", error);
  }

  revalidatePath(formData.get("path"));
}

export async function deleteTaskAction(formData) {
  const supabase = createClient();
  const taskId = formData.get("taskId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (error) {
    console.log("Delete error:", error);
    return { error: error.message };
  }
  console.log("Delete successful:", data);
  revalidatePath(formData.get("path"));
}

export async function uploadTasksAction(state, formData) {
  const supabase = createClient();
  const file = formData.get("file");
  const title = formData.get("title");
  const description = formData.get("description");
  const chapterId = formData.get("chapterId");
  const isAssignment = formData.get("isAssignment") === "true";
  const fileName = Math.random().toString(32).substring(2) + ".pdf";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("task-pdf")
    .upload(`public/${fileName}`, file);

  if (uploadError) {
    console.log("Upload Error:", uploadError);
    return { error: uploadError.message };
  }

  const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/task-pdf/${uploadData.path}`;

  const { data: insertData, error: insertError } = await supabase
    .from("tasks")
    .insert([
      {
        chapters_idchapters: parseInt(chapterId),
        title: title,
        description: description,
        taskpdf: fileUrl,
        isassignment: isAssignment,
      },
    ]);
  if (insertError) {
    console.log("Insert Error:", insertError);
    return { msg: "error", error: insertError.message };
  }

  revalidatePath(formData.get("path"));

  return { msg: "success" };
}

export async function updateTaskAction(state, formData) {
  const supabase = createClient();
  const taskId = formData.get("taskId");
  console.log("taskId ontvangen in updateTaskAction:", taskId);
  const title = formData.get("title");
  const description = formData.get("description");
  const path = formData.get("path");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { error: updateError } = await supabase
    .from("tasks")
    .update({ title, description })
    .eq("id", taskId);

  if (updateError) {
    console.log("Update Error:", updateError);
    return { error: updateError.message };
  }

  revalidatePath(formData.get("path"));
  return { msg: "success" };
}

export async function updateIntroductionAction(state, formData) {
  const supabase = createClient();
  const chapterId = formData.get("chapterId");
  const introduction = formData.get("introduction");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data: existingData } = await supabase
    .from("theory")
    .select("id")
    .eq("chapters_idchapters", chapterId)
    .single();

  if (existingData) {
    const { data: updateData } = await supabase
      .from("theory")
      .update({ introduction })
      .eq("chapters_idchapters", chapterId);
  } else {
    const { data: insertData } = await supabase
      .from("theory")
      .insert([{ chapters_idchapters: chapterId, introduction }]);
  }
  revalidatePath(formData.get("path"));
  return { msg: "success" };
}

// export async function uploadTheoryAction(formData) {
//   const supabase = createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user?.user_metadata?.role !== "admin") {
//     throw new Error("Geen admin");
//   }

//   const file = formData.get("file");
//   const description = formData.get("description");
//   const chapterId = formData.get("chapterId");
//   const fileName = Math.random().toString(32).substring(2) + ".pdf";

//   const upload = new Upload(file, {
//     endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/resumable/theory-pdf/public/${fileName}`,
//     retryDelays: [0, 1000, 3000, 5000],
//     onError: function (error) {
//       throw new Error(`Failed to upload file: ${error}`);
//     },
//     onSuccess: async function () {
//       const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/theory-pdf/${fileName}`;

//       const { data: existingData } = await supabase
//         .from("theory")
//         .select("id")
//         .eq("chapters_idchapters", chapterId)
//         .single();

//       if (existingData) {
//         await supabase
//           .from("theory")
//           .update({ description, theorypdf: fileUrl })
//           .eq("chapters_idchapters", chapterId);
//       } else {
//         await supabase.from("theory").insert([
//           {
//             chapters_idchapters: parseInt(chapterId),
//             description: description,
//             theorypdf: fileUrl,
//           },
//         ]);
//       }

//       revalidatePath(formData.get("path"));
//     },
//   });

//   upload.start();
// }

// export async function uploadTheoryAction(formData) {
//   const supabase = createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user?.user_metadata?.role !== "admin") {
//     throw new Error("Geen admin");
//   }

//   const file = formData.get("file");
//   const description = formData.get("description");
//   const chapterId = formData.get("chapterId");
//   const fileName = Math.random().toString(32).substring(2) + ".pdf";

//   const { data: uploadData } = await supabase.storage
//     .from("theory-pdf")
//     .upload(`public/${fileName}`, file);

//   const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/theory-pdf/${uploadData.path}`;

//   const { data: existingData } = await supabase
//     .from("theory")
//     .select("id")
//     .eq("chapters_idchapters", chapterId)
//     .single();

//   if (existingData) {
//     const { data: updateData } = await supabase
//       .from("theory")
//       .update({ description, theorypdf: fileUrl })
//       .eq("chapters_idchapters", chapterId);
//   } else {
//     const { data: insertData } = await supabase.from("theory").insert([
//       {
//         chapters_idchapters: parseInt(chapterId),
//         description: description,
//         theorypdf: fileUrl,
//       },
//     ]);
//   }

//   revalidatePath(formData.get("path"));
// }
export async function uploadTheoryAction(state, formData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const file = formData.get("file");
  const description = formData.get("description");
  const chapterId = formData.get("chapterId");
  const fileName = Math.random().toString(32).substring(2) + ".pdf";

  // Upload het bestand naar Supabase Storage
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("theory-pdf")
    .upload(`public/${fileName}`, file);

  if (uploadError) {
    console.error("Upload Error:", uploadError);
    throw new Error("Fout bij uploaden van het bestand");
  }

  const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/theory-pdf/${uploadData.path}`;

  // Voeg een nieuwe theorie toe aan de database
  const { data: insertData, error: insertError } = await supabase
    .from("theory")
    .insert([
      {
        chapters_idchapters: parseInt(chapterId),
        description: description,
        theorypdf: fileUrl,
      },
    ]);

  if (insertError) {
    console.error("Insert Error:", insertError);
    throw new Error("Fout bij het toevoegen van de theorie aan de database");
  }

  const path = formData.get("path");
  revalidatePath(path);
  return { msg: "success" };
  // revalidatePath(formData.get("path"));
}
export async function uploadExampleAction(state, formData) {
  const supabase = createClient();
  const file = formData.get("file");
  const description = formData.get("description");
  const chapterId = formData.get("chapterId");
  const url = formData.get("url");
  const fileNameParts = file.name.split(".");
  const fileExtension = fileNameParts.length > 1 ? fileNameParts.pop() : "";
  const fileName =
    Math.random().toString(32).substring(2) +
    (fileExtension ? `.${fileExtension}` : "");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("examples")
    .upload(`${fileName}`, file);

  if (uploadError) {
    console.log("Upload Error:", uploadError);
    return { error: uploadError.message };
  }

  const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/examples/${uploadData.path}`;

  const { data: insertData, error: insertError } = await supabase
    .from("examples")
    .insert([
      {
        chapters_idchapters: parseInt(chapterId),
        description: description,
        exampleimage: fileUrl,
        url: url || null,
      },
    ]);
  if (insertError) {
    console.log("Insert Error:", insertError);
    return { error: insertError.message };
  }

  const path = formData.get("path");
  revalidatePath(path);
  return { msg: "success" };
}

export async function deleteExampleAction(formData) {
  const supabase = createClient();
  const exampleId = formData.get("exampleId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { error } = await supabase
    .from("examples")
    .delete()
    .eq("id", exampleId);

  if (error) {
    console.log("Delete Error:", error);
    return { error: error.message };
  }

  const path = formData.get("path");
  revalidatePath(path);
}

export async function updateExampleAction(formData) {
  const supabase = createClient();
  const exampleId = formData.get("exampleId");
  const description = formData.get("description");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data, error } = await supabase
    .from("examples")
    .update({ description })
    .eq("id", exampleId);

  if (error) {
    console.log("Update Error:", error);
    return { error: error.message };
  }

  const path = formData.get("path");
  console.log("revalidate van ", path);
  revalidatePath(path);
}

export async function uploadResultAction(formData) {
  const supabase = createClient();
  const file = formData.get("file");
  // if (file.size > 5 * 1024 * 1024) {
  //   // Controleer of bestand groter is dan 5MB
  //   toast.error("Upload mislukt, bestand mag niet groter zijn dan 5MB.");
  //   return;
  // }
  const title = formData.get("title");
  const description = formData.get("description");
  const taskId = formData.get("taskId");
  const path = formData.get("path");
  const fileNameParts = file.name.split(".");
  const fileExtension = fileNameParts.length > 1 ? fileNameParts.pop() : "";
  const fileName =
    Math.random().toString(32).substring(2) +
    (fileExtension ? `.${fileExtension}` : "");

  const { data: userData } = await supabase.auth.getUser();
  const userId = userData?.user?.id;
  const userMetadata = userData?.user?.user_metadata;

  if (!userId) {
    throw new Error("Gebruiker niet ingelogd");
  }

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("results-pdf")
    .upload(`public/${fileName}`, file);

  if (uploadError) {
    console.log("Upload Error:", uploadError);
    return { error: uploadError.message };
  }

  const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/results-pdf/${uploadData.path}`;

  const { data: insertData, error: insertError } = await supabase
    .from("work")
    .insert([
      {
        title: title,
        description: description,
        tasks_idtasks: parseInt(taskId),
        users_userid: userId,
        uploadwork: fileUrl,
        date: new Date().toISOString(),
        firstname: userMetadata?.firstname || "Onbekend",
        lastname: userMetadata?.lastname || "",
      },
    ]);
  if (insertError) {
    console.log("Insert Error:", insertError);
    return { error: insertError.message };
  }
  console.log("revalidate van ", path);
  revalidatePath(path);
}

export async function updateResultAction(state, formData) {
  const supabase = createClient();
  const uploadId = formData.get("uploadId");
  const title = formData.get("title");
  const description = formData.get("description");
  const path = formData.get("path");

  if (!uploadId) {
    throw new Error("Geen uploadId opgegeven");
  }

  // Update het werk in de database
  const { error: updateError } = await supabase
    .from("work")
    .update({ title, description })
    .eq("id", uploadId);

  if (updateError) {
    console.log("Update Error:", updateError);
    return { error: updateError.message };
  }

  console.log("Resultaat bijgewerkt");
  revalidatePath(formData.get("path"));
  return { msg: "success" };
}

export async function deleteResultAction(formData) {
  const supabase = createClient();
  const uploadId = formData.get("uploadId"); // ID van het werk
  const filePath = formData.get("filePath"); // Pad van het bestand in de storage
  const path = formData.get("path");

  if (!uploadId) {
    throw new Error("Geen uploadId opgegeven");
  }

  // Verwijder het werk uit de database
  const { error: deleteError } = await supabase
    .from("work")
    .delete()
    .eq("id", uploadId);

  if (deleteError) {
    console.log("Delete Error:", deleteError);
    return { error: deleteError.message };
  }

  // Verwijder het bestand uit Supabase Storage
  const { error: storageError } = await supabase.storage
    .from("results-pdf")
    .remove([filePath]);

  if (storageError) {
    console.log("Storage Delete Error:", storageError);
    return { error: storageError.message };
  }

  console.log("Resultaat verwijderd");
  revalidatePath(path);
}

export async function filterChapterAction(formData) {
  const levelId = formData.get("levelId");

  redirect(`?levelId=${levelId}`);
}

export async function uploadFeedbackAction(state, formData) {
  const supabase = createClient();
  const feedback = formData.get("feedback");
  const workId = formData.get("workId");
  const isShowcase = formData.get("isshowcase") === "true";
  const path = formData.get("path");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data, error } = await supabase
    .from("work")
    .update({ feedback, isshowcase: isShowcase })
    .eq("id", workId);

  if (error) {
    console.log("Update Error:", error);
    return { error: error.message };
  }

  revalidatePath(path);

  return { msg: "success" };
}

export async function inviteUserAction(state, formData) {
  const supabase = createClient(true);
  const email = formData.get("email");
  const path = formData.get("path");

  if (!email) {
    return { error: "Email is required" };
  }

  try {
    const { data, error } = await supabase.auth.admin.inviteUserByEmail(email);

    if (error) {
      throw error;
    }
    revalidatePath(path);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function addChapterAction(state, formData) {
  const supabase = createClient();
  const title = formData.get("title");
  const description = formData.get("description");
  const courseId = formData.get("courseId");
  const levelId = formData.get("levelId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  const { data, error } = await supabase.from("chapters").insert([
    {
      title,
      description,
      courses_idcourses: courseId,
      level_idlevel: levelId,
    },
  ]);

  if (error) {
    console.log("Insert Error:", error);
    return { error: error.message };
  }

  revalidatePath(formData.get("path"));
  return { msg: "success" };
}

export async function deleteUserAction(state, formData) {
  const id = formData.get("id");

  const supabase = createClient(true);
  const { data, error } = await supabase.auth.admin.deleteUser(id);

  revalidatePath(formData.get("path"));
  return { msg: "success" };
}

export async function updateChapterAction(state, formData) {
  const supabase = createClient();
  const chapterId = formData.get("chapterId");
  const title = formData.get("title");
  const description = formData.get("description");
  const level = formData.get("level");

  const { error } = await supabase
    .from("chapters")
    .update({ title, description, level_idlevel: level })
    .eq("id", chapterId);

  revalidatePath(formData.get("path"));
  return { msg: "success" };
}

export async function updateShowcaseAction(formData) {
  const supabase = createClient();
  const showcaseId = formData.get("showcaseId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.role !== "admin") {
    throw new Error("Geen admin");
  }

  try {
    const { data, error } = await supabase
      .from("work")
      .update({ isshowcase: false })
      .eq("id", parseInt(showcaseId));

    if (error) {
      throw error;
    }
  } catch (error) {
    console.log("Update error:", error);
  }

  revalidatePath(formData.get("path"));
}

export const updateUserAction = async (state, formData) => {
  const userId = formData.get("id");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");

  const supabase = createClient(true);
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: {
      firstname: firstname || "",
      lastname: lastname || "",
    },
  });

  if (error) throw error;
};
