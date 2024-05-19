import { createBrowserClient } from "@supabase/ssr";
import { useState, useEffect } from "react";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      setUser(data.user);
    }

    getUser();
  }, []);

  return user;
}
