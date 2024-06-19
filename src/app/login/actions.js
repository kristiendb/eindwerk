"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return redirect(`/login?error=Ongeldig%20e-mailadres%20of%20wachtwoord`);
  }

  revalidatePath("/start", "layout");
  redirect("/start");
}

export async function forgotPassword(formData) {
  const supabase = createClient();
  const email = formData.get("email");

  console.log("Reset password for email:", email);

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-wachtwoord`,
  });

  if (error) {
    console.error("Error sending password reset email:", error);
    return redirect("/error");
  }

  revalidatePath("/login", "layout");
  return redirect("/login");
}

export async function addUser(formData) {
  const supabase = createClient();
  const email = formData.get("email");

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/welkom`,
  });

  if (error) {
    console.error("Error sending password reset email:", error);
    return redirect("/error");
  }

  revalidatePath("/login", "layout");
  return redirect("/login");
}
