"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

const UploadFeedback = ({ workId, formAction, params, state }) => {
  const [isShowcase, setIsShowcase] = useState(false);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Feedback
          </label>
          <textarea
            name="feedback"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <Checkbox
            id="isshowcase"
            checked={isShowcase}
            onCheckedChange={(checked) => setIsShowcase(checked)}
          />
          <label
            htmlFor="isshowcase"
            className="ml-2 text-gray-700 text-sm font-bold"
          >
            Markeer als showcase
          </label>
        </div>
        <input type="hidden" name="workId" value={workId} />
        <input type="hidden" name="isshowcase" value={isShowcase} />
        <input type="hidden" name="path" value={"/start/werk-studenten/"} />
        <SubmitButton label="Opslaan" />
        {/* <button
          type="submit"
          className="bg-black hover:bg-slate-300 hover:text-black hover:transition-all hover:duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Opslaan
        </button> */}
      </form>
    </div>
  );
};

export default UploadFeedback;
