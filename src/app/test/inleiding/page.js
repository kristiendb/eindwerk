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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (levelSlug && chapterSlug) {
        const chapterResult = await getChapterDetails(
          supabase,
          chapterSlug,
          levelSlug
        );
        if (chapterResult.error) {
          console.error("Error fetching chapter details:", chapterResult.error);
          setLoading(false);
          return;
        }
        const chapterData = chapterResult.data;
        setChapter(chapterData);

        if (chapterData && chapterData.id) {
          const theoryResult = await selectTheoryByChapterId(
            supabase,
            chapterData.id
          );
          if (theoryResult.error) {
            console.error("Error fetching theory:", theoryResult.error);
            setLoading(false);
            return;
          }
          setTheory(theoryResult.data);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [levelSlug, chapterSlug]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {!chapter || !theory ? (
        <p>Geen content beschikbaar</p>
      ) : (
        <p>{theory.introduction}</p>
      )}
    </>
  );
};

export default Page;
