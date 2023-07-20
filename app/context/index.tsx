"use client";

import { createContext, useState } from "react";
import { grid_works } from "../data";
import { Work } from "../types";

type SlideShow = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedWork: Work;
  setSelectedWork: React.Dispatch<React.SetStateAction<Work>>;
};

const defaultSlideshowState: SlideShow = {
  isOpen: false,
  setIsOpen: () => {},
  selectedWork: grid_works[0],
  setSelectedWork: () => {},
};

export const SlideshowContext = createContext(defaultSlideshowState);

export default function SlideshowProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(defaultSlideshowState.isOpen);
  const [selectedWork, setSelectedWork] = useState(defaultSlideshowState.selectedWork);

  return (
    <SlideshowContext.Provider
      // Assing values to provider
      value={{
        isOpen,
        setIsOpen,
        selectedWork,
        setSelectedWork,
      }}
    >
      {children}
    </SlideshowContext.Provider>
  );
}
