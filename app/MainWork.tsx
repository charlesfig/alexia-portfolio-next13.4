import Image from "next/image";
import { Work } from "./types";

interface WorkProps extends Work {
  className?: string;
  imgClassName?: string;
}
export default function MainWork({
  className = "",
  imgClassName = "",
  ...work
}: WorkProps & { className?: string; imgClassName?: string }) {
  return (
    <div id="work" className={`relative w-full group overflow-hidden ${className}`}>
      <Image
        className={`w-full max-2w-xl mx-auto ${imgClassName}`}
        alt={`"${work.project_name}" by Alexia Planas Lee`}
        {...work.image}
      />
    </div>
  );
}
