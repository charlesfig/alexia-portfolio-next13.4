"use client";

import Image from "next/image";
import { useContext } from "react";
import Slideshow from "../Slideshow";
import { SlideshowContext } from "../context";
import { grid_works } from "../data";
import { Work } from "../types";

const page_title = "Alexia Planas Lee";

// export const metadata: Metadata = {
//   /** The title of the document */
//   title: page_title,
//   description: "Visual creative with work showcased in Vogue Italia, Times Square, and Vanidad.",
//   keywords: ["Alexia", "Alexia Planas", "Alexia Planas Lee", "Visual creative"],

//   openGraph: {
//     title: page_title,
//     description: "Visual creative with work showcased in Vogue Italia and Times Square",
//     url: "www.alexiaplanaslee.com",
//     siteName: "Portfolio - Alexia Planas Lee",
//     images: [
//       {
//         url: "/images/dinner_for_none.jpg",
//         width: 824,
//         height: 1024,
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: page_title,
//     description: "Visual creative with work showcased in Vogue Italia and Times Square",
//     images: [
//       {
//         url: "/images/dinner_for_none.jpg",
//         width: 824,
//         height: 1024,
//       },
//     ],
//     site: "www.alexiaplanaslee.com",
//   },
// };

export default function WorksPage() {
  return (
    <div id="wrapper" className="w-full">
      <Photos />
    </div>
  );
}

interface WorkProps extends Work {
  className?: string;
  imgClassName?: string;
}
const Photo = ({ className = "", imgClassName = "", ...work }: WorkProps) => (
  <div id="work" className={`relative w-full group overflow-hidden ${className}`}>
    <div className="w-full bg-black/20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all h-full absolute top-0 p-2 flex flex-col items-end justify-end text-white">
      <p className="uppercase text-right">{work.project_name}</p>
      <p className="italic text-right text-sm opacity-80 ">{work.publication}</p>
    </div>
    <Image
      className={`object-cover max-w-xl w-full h-full mx-auto ${imgClassName}`}
      alt={`"${work.project_name}" by Alexia Planas Lee`}
      {...work.image}
    />
  </div>
);

function Photos() {
  let { setIsOpen, setSelectedWork } = useContext(SlideshowContext);

  const openPhoto = (id: number) => {
    setSelectedWork(grid_works.find((work) => work.photo_id === id)!);
    setIsOpen(true);
  };

  return (
    <>
      <Slideshow />
      <div className="grid grid-cols-2 gap-2">
        {grid_works.map((work) => {
          return (
            <button onClick={() => openPhoto(work.photo_id)}>
              <Photo {...work} className="aspect-square" imgClassName={work.className} />
            </button>
          );
        })}
      </div>
    </>
  );
}
