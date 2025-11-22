import { useEffect } from "react";

export const useDynamicScrollbar = () => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-thumb-color",
        "#131313"
      );
      document.documentElement.style.setProperty(
        "--scroll-track-color",
        "#f2a60c"
      );

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.documentElement.style.setProperty(
          "--scroll-thumb-color",
          "#f2a60c"
        );
        document.documentElement.style.setProperty(
          "--scroll-track-color",
          "#131313"
        );
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);
};
