import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  /** The title of the document */
  title: "Alexia Planas Lee",
  description: "Visual creative with work showcased in Vogue Italia, Times Square, and Vanidad.",
  keywords: ["Alexia", "Alexia Planas", "Alexia Planas Lee", "Visual creative"],

  openGraph: {
    title: "Alexia Planas Lee",
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
    title: "Alexia Planas Lee",
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

type WorkProps = {
  name: string;
  image: { src: string; height: number; width: number };
  publication: string;
};
const main_work: WorkProps = {
  name: "Dinner for None",
  image: { src: "/images/dinner_for_none.jpg", height: 1024, width: 824 },
  publication: "PETRIe Inventory",
};
const grid_works: Array<WorkProps> = [
  {
    name: "Dinner for None",
    image: { src: "/images/dinner_for_none.jpg", height: 1024, width: 824 },
    publication: "PETRIe Inventory",
  },
  {
    name: "Self-isolation",
    image: { src: "/images/dinner_for_none.jpg", height: 1024, width: 824 },
    publication: "Lobster Magazine",
  },
  {
    name: "So you are, so you love",
    image: { src: "/images/dinner_for_none.jpg", height: 1024, width: 824 },
    publication: "Odalisque Magazine / Vogue Italia’s PhotoVogue",
  },
  {
    name: "Funeral march of a marionette ",
    image: { src: "/images/funeral_march.jpeg", height: 930, width: 750 },
    publication: "No Future Magazine",
  },
  {
    name: "Of moon and earth",
    image: { src: "/images/funeral_march.jpeg", height: 930, width: 750 },
    publication: "Lobster Magazine",
  },
  {
    name: "Of moon and earth",
    image: { src: "/images/funeral_march.jpeg", height: 930, width: 750 },
    publication: "Lobster Magazine",
  },
];

const Work = ({
  name,
  image,
  publication,
  className = "",
  imgClassName = "",
}: WorkProps & { className?: string; imgClassName?: string }) => (
  <div id="work" className={`relative w-full group overflow-hidden ${className}`}>
    <div className="w-full bg-black/20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all h-full absolute top-0 p-2 flex flex-col items-end justify-end text-white">
      <p className="uppercase text-right">{name}</p>
      <p className="italic text-right text-sm opacity-80 ">{publication}</p>
    </div>
    <Image
      className={`w-full max-w-xl mx-auto ${imgClassName}`}
      alt={`"${name}" by Alexia Planas Lee`}
      {...image}
    />
  </div>
);

export default function Homepage() {
  return (
    <div className="w-full text-center relative max-w-xl mx-auto p-4">
      <header className="sticky top-0 left-0 py-5 bg-white z-10">
        <h1 className="text-center text-4xl md:text-5xl font-medium uppercase tracking-[0.35px]">
          Alexia Planas Lee
        </h1>
        <p className="tracking-wider uppercase mt-1">
          Creative Direction | Fashion Styling | Production
        </p>
        <div className="text-right absolute -left-20 top-36 flex flex-col gap-2 w-16">
          {["About", "Works", "Contact"].map((item) => (
            <div className="hover:font-bold cursor-pointer uppercase scale-[0.8] text-[17px]">
              {item}
            </div>
          ))}
        </div>
      </header>

      <div id="wrapper" className="w-full">
        {/* Main Work */}
        <Work {...main_work} imgClassName="-mt-[26px]" />

        {/* Description */}
        <div className="my-10 w-full text-justify">
          Raised in Barcelona, I'm a Spanish and Chinese visual creative with work showcased in
          Vogue Italia, Vanidad, and New York City's Times Square. As Head of Impact Design and
          Innovation at a Web3 fashion circularity startup, I have a competitive understanding of
          new sustainable supply chain solutions and new technologies applied to the fashion
          industry - blockchain product transparency, Al, metaverse experiences (VR AR), and digital
          twins.
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-2 gap-2">
          {grid_works.map((work) => (
            <Work {...work} className="aspect-square" />
          ))}
        </div>

        {/* Contact Info */}
        <div className="my-20 w-full text-center">contact@alexiaplanaslee.com</div>
      </div>
    </div>
  );
}
