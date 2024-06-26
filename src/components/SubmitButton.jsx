import { useFormStatus } from "react-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const SubmitButton = ({ label, className = "" }) => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button
      type="submit"
      className={twMerge(
        "border-0.25 border-black bg bg-black text-white hover:bg-white hover:text-black duration-300 rounded-full pt-1 pb-1 pl-3 pr-3",
        className
      )}
      disabled={pending}
    >
      {pending ? <AiOutlineLoading className="animate-spin" /> : label}
    </button>
  );
};
export default SubmitButton;
