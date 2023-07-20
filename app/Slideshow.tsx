"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { SlideshowContext } from "./context";
import { grid_works } from "./data";

export default function Slideshow() {
  let { isOpen, setIsOpen, selectedWork, setSelectedWork } = useContext(SlideshowContext);

  const getPrevProject = () => setSelectedWork(grid_works[selectedWork.project_id - 2]);
  const getPrevProjectDisabled = selectedWork.project_id == grid_works[0].project_id;
  const getNextProject = () => setSelectedWork(grid_works[selectedWork.project_id]);
  const getNextProjectDisabled = selectedWork.project_id == grid_works.slice(-1)[0].project_id;

  function handleKeyDown(e) {
    if (e.key == "ArrowRight" && !getNextProjectDisabled) {
      getNextProject();
    } else if (e.key == "ArrowLeft" && !getPrevProjectDisabled) {
      getPrevProject();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [getNextProjectDisabled, getPrevProjectDisabled, getNextProject, getPrevProject]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed top-0 left-0 w-screen bg-black/80 z-10 h-screen flex justify-center items-center select-none"
    >
      <Dialog.Panel className="object-contain relative flex items-center justify-center h-full w-full">
        <button
          className="absolute top-10 md:top-20 right-10 md:right-20 text-white uppercase text-3xl z-20"
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
        >
          Close
        </button>

        <div className="relative">
          <Image
            className="object-contain z-20 max-h-[80vh] w-full"
            alt={selectedWork.project_name}
            {...selectedWork.image}
          />
          <p className="text-center text-gray-500 md:hidden mt-2 absolute -bottom-8 left-0 right-0">
            <span className="uppercase">{selectedWork.project_name}</span> for{" "}
            <span className="italic">{selectedWork.publication}</span>
          </p>
        </div>

        <p className="text-white absolute bottom-20 left-20 hidden md:block">
          <Dialog.Title>{selectedWork.project_name}</Dialog.Title>
          <Dialog.Description>{selectedWork.publication}</Dialog.Description>
          {/* <p>This is the project's description</p> */}
        </p>

        <button
          onClick={getPrevProject}
          disabled={getPrevProjectDisabled}
          className="disabled:hidden absolute left-0 h-full w-1/2 flex justify-start items-center group"
          tabIndex={-1}
        >
          <p className="text-gray-600 uppercase text-3xl ml-10 md:ml-20 group-hover:text-gray-200 transition-all drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Left
          </p>
        </button>

        <button
          onClick={getNextProject}
          disabled={getNextProjectDisabled}
          className="disabled:hidden absolute right-0 h-full w-1/2 flex justify-end items-center group"
          tabIndex={-1}
        >
          <p className="text-gray-600 uppercase text-3xl mr-10 md:mr-20 group-hover:text-gray-200 transition-all drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Right
          </p>
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
