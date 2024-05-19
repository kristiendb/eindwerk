"use client";
import { selectName } from "@/functions/queries";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const Name = () => {
  const supabase = createClient();
  const [name, setName] = useState("");

  const getName = async () => {
    const data = await selectName(supabase);

    setName(data);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <>
      <h2 className="text-4xl pb-8">Welkom, {name}</h2>
    </>
  );
};
export default Name;
