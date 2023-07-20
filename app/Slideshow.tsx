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
    console.log(e);
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
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed top-0 left-0 w-screen bg-black/80 z-10 h-screen flex justify-center items-center"
    >
      <Dialog.Panel className="object-contain relative flex items-center justify-center h-full w-full">
        <button
          className="absolute top-20 right-20 text-white uppercase text-3xl z-20"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>

        <div className="relative">
          <Image
            className="object-contain z-20 max-h-[80vh] w-full"
            alt={selectedWork.project_name}
            {...selectedWork.image}
          />
        </div>

        <p className="text-white absolute bottom-20 left-20">
          <Dialog.Title>{selectedWork.project_name}</Dialog.Title>
          <Dialog.Description>{selectedWork.publication}</Dialog.Description>
          {/* <p>This is the project's description</p> */}
        </p>

        <button
          onClick={getPrevProject}
          disabled={getPrevProjectDisabled}
          className="disabled:hidden absolute left-0 h-full w-1/2 flex justify-start items-center group"
        >
          <p className="text-gray-600 uppercase text-3xl ml-20 group-hover:text-gray-200 transition-all">
            Left
          </p>
        </button>

        <button
          onClick={getNextProject}
          disabled={getNextProjectDisabled}
          className="disabled:hidden absolute right-0 h-full w-1/2 flex justify-end items-center group"
        >
          <p className="text-gray-600 uppercase text-3xl mr-20 group-hover:text-gray-200 transition-all">
            Right
          </p>
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
