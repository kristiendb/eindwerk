import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ImagesLayout = ({ col, src, alt, className = "" }) => {
  return (
    <div
      className={twMerge(
        `col-span-${col} h-80 relative overflow-hidden`,
        className
      )}
    >
      <Dialog>
        <DialogTrigger>
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" transition-all transition-200 hover:scale-110"
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{alt}</DialogTitle>
          </DialogHeader>
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            style={{ objectFit: "contain" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ImagesLayout;
