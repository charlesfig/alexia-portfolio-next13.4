"use client";

import Image from "next/image";
import { useContext } from "react";
import Slideshow from "./Slideshow";
import { SlideshowContext } from "./context";
import { grid_works } from "./data";
import type { Work } from "./types";

interface WorkProps extends Work {
  className?: string;
  imgClassName?: string;
}
const ProjectPreview = ({ className = "", imgClassName = "", ...work }: WorkProps) => (
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

export default function Works() {
  let { setIsOpen, setSelectedWork } = useContext(SlideshowContext);

  const openProject = (id: number) => {
    setSelectedWork(grid_works.find((work) => work.project_id === id)!);
    setIsOpen(true);
  };

  return (
    <>
      <Slideshow />
      <div className="grid grid-cols-2 gap-2">
        {grid_works.map((work) => {
          if (work.preview == false) return;
          return (
            <button onClick={() => openProject(work.project_id)}>
              <ProjectPreview {...work} className="aspect-square" imgClassName={work.className} />
            </button>
          );
        })}
      </div>
    </>
  );
}
