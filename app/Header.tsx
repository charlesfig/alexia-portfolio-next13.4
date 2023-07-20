import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 py-5 bg-white z-10">
      <Link
        href={"/"}
        className="text-center text-4xl md:text-5xl font-medium uppercase tracking-[0.35px]"
      >
        Alexia Planas Lee
      </Link>
      <p className="tracking-wider uppercase mt-1">
        Creative Direction | Fashion Styling | Production
      </p>
      <Navigation />
    </header>
  );
}
