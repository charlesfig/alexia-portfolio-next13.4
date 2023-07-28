import Image from "next/image";

import { Metadata } from "next";
import Header from "./Header";
import Works from "./Works";
import ContactInfo from "./contact/ContactInfo";
import { grid_works } from "./data";
import { taviraj } from "./fonts";
import { Work } from "./types";

const page_title = "Alexia Planas Lee";

export const metadata: Metadata = {
  /** The title of the document */
  title: page_title,
  description: "Visual creative with work showcased in Vogue Italia, Times Square, and Vanidad.",
  keywords: ["Alexia", "Alexia Planas", "Alexia Planas Lee", "Visual creative"],

  openGraph: {
    title: page_title,
    description: "Visual creative with work showcased in Vogue Italia and Times Square",
    url: "www.alexiaplanaslee.com",
    siteName: "Portfolio - Alexia Planas Lee",
    images: [
      {
        url: "/images/dinner_for_none.jpg",
        width: 824,
        height: 1024,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: page_title,
    description: "Visual creative with work showcased in Vogue Italia and Times Square",
    images: [
      {
        url: "/images/dinner_for_none.jpg",
        width: 824,
        height: 1024,
      },
    ],
    site: "www.alexiaplanaslee.com",
  },
};

interface WorkProps extends Work {
  className?: string;
  imgClassName?: string;
}
const MainWork = ({
  className = "",
  imgClassName = "",
  ...work
}: WorkProps & { className?: string; imgClassName?: string }) => (
  <div id="work" className={`relative w-full group overflow-hidden ${className}`}>
    <Image
      className={`w-full max-w-xl mx-auto ${imgClassName}`}
      alt={`"${work.project_name}" by Alexia Planas Lee`}
      {...work.image}
    />
  </div>
);

export default function Homepage() {
  return (
    <div className="w-full text-center relative max-w-xl mx-auto p-4">
      <Header />

      <div id="wrapper" className="w-full">
        {/* Main Work */}
        <MainWork {...grid_works[0]} imgClassName="-mt-[26px]" />

        {/* Description */}
        <div className={`${taviraj.className} my-10 w-full text-justify tracking-tight`}>
          Alexia Planas Lee is a Spanish and Chinese visual creative with work showcased in Vogue
          Italia, Vanidad, and New York City’s Times Square.
        </div>

        <Works />

        <ContactInfo />
      </div>
    </div>
  );
}
