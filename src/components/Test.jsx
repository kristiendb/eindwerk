"use client";
import { supabase, createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

const Test = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      setUser(data.user);
    }

    getUser();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
export default Test;
