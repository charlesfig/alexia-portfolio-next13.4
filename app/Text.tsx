import { grotesk } from "./fonts";

export default function Text(props: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`${grotesk.className} my-28 w-full text-justify tracking-tight font-medium text-[20px] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
