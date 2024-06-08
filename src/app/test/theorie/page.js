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
        console.log("Fetching chapter details for:", {
          levelSlug,
          chapterSlug,
        });
        const { data: chapterData, error: chapterError } =
          await getChapterDetails(supabase, chapterSlug, levelSlug);
        if (chapterError) {
          console.error("Error fetching chapter details:", chapterError);
          return;
        }
        console.log("Chapter data:", chapterData);
        setChapter(chapterData);

        if (chapterData) {
          console.log("Fetching theory for chapter ID:", chapterData.id);
          const { data: theoryData, error: theoryError } =
            await selectTheoryByChapterId(supabase, chapterData.id);
          if (theoryError) {
            console.error("Error fetching theory:", theoryError);
            return;
          }
          console.log("Theory data:", theoryData);
          setTheory(theoryData);
        }
      }
    };

    fetchData();
  }, [levelSlug, chapterSlug]);

  if (!chapter || !theory) return <div>Loading...</div>;

  return (
    <>
      <div className="flex space-x-6">
        <p className="w-2/3">{theory.description}</p>
        <a
          href={theory.theorypdf}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-3 pb-3 pl-6 pr-6 bg-black text-white rounded-full text-sm h-fit"
        >
          Download PDF
        </a>
      </div>
    </>
  );
};

export default Page;
