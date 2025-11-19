import { useEffect, useRef, useState } from "react";

export const useInView = <T extends HTMLElement>() => {
  const refs = useRef<T[]>([]);
  const [inViewIndexes, setInViewIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elIndex = refs.current.indexOf(entry.target as T);
          if (entry.isIntersecting && !inViewIndexes.includes(elIndex)) {
            setInViewIndexes((prev) => [...prev, elIndex]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [inViewIndexes]);

  const setRef = (el: T | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return { setRef, inViewIndexes };
};
