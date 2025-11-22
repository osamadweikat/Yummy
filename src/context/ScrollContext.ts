import { createContext, useContext } from "react";

type ScrollContextType = {
  scrollTo: (index: number) => void;
};

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be used inside ScrollProvider");
  return ctx;
};
