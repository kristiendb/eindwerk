"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {
  getChapterDetails,
  selectTheoryByChapterId,
} from "@/functions/queries";

const Page = () => {
  const { levelSlug, chapterSlug } = useParams();
  const supabase = createClient();
  const [chapter, setChapter] = useState(null);
  const [theory, setTheory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (levelSlug && chapterSlug) {
        const chapterData = await getChapterDetails(
          supabase,
          chapterSlug,
          levelSlug
        );
        setChapter(chapterData);

        if (chapterData && chapterData.id) {
          const data = await selectTheoryByChapterId(supabase, chapterData.id);
          setTheory(data);
        }
      }
    };

    fetchData();
  }, [levelSlug, chapterSlug]);

  if (!chapter || !theory) return <div>Loading...</div>;

  return (
    <>
      <p>{theory.introduction}</p>
    </>
  );
};

export default Page;
